import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { Phone, Mail, MapPin, Globe, Building2, Stethoscope, CheckCircle2 } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  useReveal()
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: 'Einrichtung', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  const contactItems = [
    {
      icon: <Phone size={20} color="var(--green-300)" />,
      label: 'Telefon',
      value: '+49 721 89319042',
      href: 'tel:+4972189319042',
    },
    {
      icon: <Mail size={20} color="var(--green-300)" />,
      label: 'E-Mail',
      value: 'info@nexus-bridge.de',
      href: 'mailto:info@nexus-bridge.de',
    },
    {
      icon: <MapPin size={20} color="var(--green-300)" />,
      label: 'Adresse',
      value: 'Morgenstraße 6, 76137 Karlsruhe',
      href: null,
    },
    {
      icon: <Globe size={20} color="var(--green-300)" />,
      label: 'Website',
      value: 'nexusbridge-medical.de',
      href: 'https://www.nexusbridge-medical.de',
    },
  ]

  return (
    <div className="contact-page">
      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="section-label reveal">Kontakt</div>
          <h1 className="display-1 reveal reveal-delay-1">
            Lassen Sie uns <span className="text-accent">sprechen</span>
          </h1>
          <p className="body-lg page-hero__sub reveal reveal-delay-2">
            Egal ob Einrichtung oder Fachkraft – wir sind für Sie da.
            Nehmen Sie jetzt unverbindlich Kontakt auf.
          </p>
        </div>
        <div className="page-hero__divider" />
      </section>

      {/* ── CONTENT ── */}
      <section className="section contact-main">
        <div className="container contact-main__inner">
          {/* Direct Contact */}
          <div className="contact-info reveal--left">
            <div className="section-label">Direkt erreichen</div>
            <h2 className="display-3">Nexus-Bridge GbR</h2>
            <div className="accent-line" />

            <div className="contact-info__items">
              {contactItems.map((item, i) => {
                const El = item.href ? 'a' : 'div'
                return (
                  <El
                    key={i}
                    href={item.href || undefined}
                    target={item.href?.startsWith('http') ? '_blank' : undefined}
                    rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`contact-info__item card${item.href ? ' contact-info__item--link' : ''}`}
                  >
                    <div className="contact-info__item-icon-wrap">{item.icon}</div>
                    <div>
                      <p className="contact-info__item-label label">{item.label}</p>
                      <p className="contact-info__item-value">{item.value}</p>
                    </div>
                  </El>
                )
              })}
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap reveal--right">
            {submitted ? (
              <div className="contact-success card">
                <CheckCircle2 size={48} color="var(--green-500)" />
                <h3 className="heading-1">Nachricht gesendet!</h3>
                <p className="body-sm" style={{ color: 'var(--silver-500)', marginTop: '0.5rem' }}>
                  Vielen Dank für Ihre Anfrage. Wir melden uns so schnell wie möglich bei Ihnen.
                </p>
              </div>
            ) : (
              <form className="contact-form card" onSubmit={handleSubmit}>
                <h2 className="heading-1 contact-form__title">Nachricht senden</h2>

                <div className="contact-form__type-toggle">
                  {[
                    { key: 'Einrichtung', icon: <Building2 size={15} /> },
                    { key: 'Fachkraft', icon: <Stethoscope size={15} /> },
                  ].map(t => (
                    <button
                      key={t.key}
                      type="button"
                      className={`contact-form__type-btn${form.type === t.key ? ' contact-form__type-btn--active' : ''}`}
                      onClick={() => setForm(prev => ({ ...prev, type: t.key }))}
                    >
                      {t.icon} {t.key}
                    </button>
                  ))}
                </div>

                <div className="contact-form__grid">
                  <div className="contact-form__field">
                    <label className="label contact-form__label" htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="Ihr vollständiger Name" className="contact-form__input" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="contact-form__field">
                    <label className="label contact-form__label" htmlFor="email">E-Mail</label>
                    <input id="email" name="email" type="email" placeholder="ihre@email.de" className="contact-form__input" value={form.email} onChange={handleChange} required />
                  </div>
                </div>

                <div className="contact-form__field">
                  <label className="label contact-form__label" htmlFor="phone">Telefon <span style={{ opacity: 0.5 }}>(optional)</span></label>
                  <input id="phone" name="phone" type="tel" placeholder="+49 ..." className="contact-form__input" value={form.phone} onChange={handleChange} />
                </div>

                <div className="contact-form__field">
                  <label className="label contact-form__label" htmlFor="message">Ihre Nachricht</label>
                  <textarea id="message" name="message" rows={5} placeholder="Schildern Sie uns kurz Ihr Anliegen..." className="contact-form__input contact-form__textarea" value={form.message} onChange={handleChange} required />
                </div>

                <button type="submit" className="btn btn--primary contact-form__submit">
                  Nachricht senden →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

import { useState, useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'
import { Phone, Mail, MapPin, Globe, Building2, Stethoscope, CheckCircle2 } from 'lucide-react'
import { client } from '../lib/sanity'
import { accentWord } from '../lib/accentWord'
import SEO from '../components/SEO'
import './Contact.css'

export default function Contact() {
  useReveal()
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: 'Einrichtung', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [pageData, setPageData] = useState(null)
  const [settings, setSettings] = useState(null)

  useEffect(() => {
    client.fetch('*[_type == "contactPage"][0]').then(setPageData)
    client.fetch('*[_type == "siteSettings"][0]').then(setSettings)
  }, [])

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Web3Forms Lead Generation Integration
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: pageData?.web3formsKey || '89e588e2-f72c-44ce-a148-17f4a727cfac',
          ...form,
          subject: `Neue Anfrage von ${form.name} (${form.type})`,
          from_name: 'Nexusbridge Website'
        })
      })

      const data = await response.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        alert("Fehler beim Senden: " + data.message)
      }
    } catch (error) {
      alert("Etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut.")
    }
  }

  const contactItems = [
    {
      icon: <Phone size={20} color="var(--green-300)" />,
      label: 'Telefon',
      value: settings?.phone || '+49 721 89319042',
      href: settings?.phone ? `tel:${settings.phone}` : 'tel:+4972189319042',
    },
    {
      icon: <Mail size={20} color="var(--green-300)" />,
      label: 'E-Mail',
      value: settings?.email || 'info@nexus-bridge.de',
      href: settings?.email ? `mailto:${settings.email}` : 'mailto:info@nexus-bridge.de',
    },
    {
      icon: <MapPin size={20} color="var(--green-300)" />,
      label: 'Adresse',
      value: settings?.address || 'Morgenstraße 6, 76137 Karlsruhe',
      href: null,
    },
    {
      icon: <Globe size={20} color="var(--green-300)" />,
      label: 'Website',
      value: new URL(settings?.socialLinks?.[0]?.url || 'https://nexusbridge-medical.de').hostname,
      href: settings?.socialLinks?.[0]?.url || 'https://www.nexusbridge-medical.de',
    },
  ]

  return (
    <div className="contact">
      <SEO title={pageData?.seoTitle} description={pageData?.seoDescription} siteSettings={settings} />
      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="section-label reveal">Kontakt</div>
          <h1 className="display-1 reveal reveal-delay-1">
            {accentWord(pageData?.heroTitle || 'Lassen Sie uns sprechen', pageData?.accentWord || 'sprechen')}
          </h1>
          <p className="body-lg page-hero__sub reveal reveal-delay-2">
            {pageData?.heroSubtitle || 'Egal ob Einrichtung oder Fachkraft – wir sind für Sie da. Nehmen Sie jetzt unverbindlich Kontakt auf.'}
          </p>
        </div>
        <div className="page-hero__divider" />
      </section>

      {/* ── CONTENT ── */}
      <section className="section contact-main">
        <div className="container contact-main__inner">
          {/* Direct Contact */}
          <div className="contact-info reveal--left">
            <div className="section-label">{pageData?.contactSectionLabel || 'Direkt erreichen'}</div>
            <h2 className="display-3">{pageData?.contactSectionTitle || 'Nexus-Bridge GbR'}</h2>
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
                <h3 className="heading-1">{pageData?.formSuccessTitle || 'Nachricht gesendet!'}</h3>
                <p className="body-sm" style={{ color: 'var(--silver-500)', marginTop: '0.5rem' }}>
                  {pageData?.formSuccessMessage || 'Vielen Dank für Ihre Anfrage. Wir melden uns so schnell wie möglich bei Ihnen.'}
                </p>
              </div>
            ) : (
              <form className="contact-form card" onSubmit={handleSubmit}>
                <h2 className="heading-1 contact-form__title">{pageData?.formTitle || 'Nachricht senden'}</h2>

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
                    <input id="name" name="name" type="text" placeholder={pageData?.placeholderName || "Ihr vollständiger Name"} className="contact-form__input" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="contact-form__field">
                    <label className="label contact-form__label" htmlFor="email">E-Mail</label>
                    <input id="email" name="email" type="email" placeholder={pageData?.placeholderEmail || "ihre@email.de"} className="contact-form__input" value={form.email} onChange={handleChange} required />
                  </div>
                </div>

                <div className="contact-form__field">
                  <label className="label contact-form__label" htmlFor="phone">Telefon <span style={{ opacity: 0.5 }}>(optional)</span></label>
                  <input id="phone" name="phone" type="tel" placeholder={pageData?.placeholderPhone || "+49 ..."} className="contact-form__input" value={form.phone} onChange={handleChange} />
                </div>

                <div className="contact-form__field">
                  <label className="label contact-form__label" htmlFor="message">Ihre Nachricht</label>
                  <textarea id="message" name="message" rows={5} placeholder={pageData?.placeholderMessage || "Schildern Sie uns kurz Ihr Anliegen..."} className="contact-form__input contact-form__textarea" value={form.message} onChange={handleChange} required />
                </div>

                <button type="submit" className="btn btn--primary contact-form__submit">
                  {pageData?.submitButtonText || 'Nachricht senden'} →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

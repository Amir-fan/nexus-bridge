import { useEffect, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { NavLink } from 'react-router-dom'
import { client, urlFor } from '../lib/sanity'
import { Search, FileText, Users, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react'
import './FindProfessionals.css'

const iconMap = {
  Search: <Search size={22} color="var(--green-600)" />,
  FileText: <FileText size={22} color="var(--green-600)" />,
  Users: <Users size={22} color="var(--green-600)" />,
  MessageCircle: <MessageCircle size={22} color="var(--green-600)" />,
  CheckCircle2: <CheckCircle2 size={22} color="var(--green-600)" />,
}

const PAGE_IMAGE_DEFAULT = 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=900&h=640&fit=crop'

export default function FindProfessionals() {
  useReveal()
  const [pageData, setPageData] = useState(null)

  useEffect(() => {
    client.fetch('*[_type == "employerPage"][0]').then(setPageData)
  }, [])

  const services = pageData?.employerServices?.length > 0 ? pageData.employerServices : [
    { iconName: 'Search', title: 'Bedarfsanalyse', description: 'Genaue Erfassung Ihres Anforderungsprofils.' },
    { iconName: 'Users', title: 'Vorselektion', description: 'Prüfung von Zeugnissen und Qualifikationen.' },
    { iconName: 'FileText', title: 'Organisation', description: 'Unterstützung bei bürokratischen Hürden.' },
    { iconName: 'MessageCircle', title: 'Beratung & Nachbetreuung', description: 'Fortlaufende Unterstützung und Betreuung nach der Vermittlung, um eine nachhaltige Zufriedenheit und erfolgreiche Zusammenarbeit zu gewährleisten.' }
  ]
  const profiles = pageData?.profiles?.length > 0 ? pageData.profiles : [
    { category: 'Ärztliches Personal', items: ['Fachärzte', 'Assistenzärzte', 'Chefärzte'] },
    { category: 'Medizinische Fachkraft', items: ['Fachgesundheits- und Krankenpflegekräfte (Anästhesie & Intensivpflege)', 'Fachpflegekräfte im Operationsdienst', 'OTAs, MTAs, MTLAs, MTRAs', 'Hebammen'] }
  ]

  return (
    <div className="fp-page">
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="container page-hero__inner page-hero__inner--split">
          <div className="page-hero__text">
            <div className="section-label reveal">{pageData?.heroLabel || 'Fachkräfte finden'}</div>
            <h1 className="display-1 reveal reveal-delay-1">
              {pageData?.heroTitle || 'Qualifiziertes Personal — schnell und zuverlässig'}
            </h1>
            <p className="body-lg page-hero__sub reveal reveal-delay-2">
              {pageData?.heroSubtitle || 'Sie suchen dringend Fachpersonal für Ihre Klinik, haben aber keine Zeit und Ressourcen diese zu finden? Genau hier setzen wir an.'}
            </p>
          </div>
          <div className="page-hero__img-col reveal--right">
            <img
              src={pageData?.heroImage ? urlFor(pageData.heroImage).url() : PAGE_IMAGE_DEFAULT}
              alt="Medizinisches Fachpersonal"
              className="page-hero__img"
            />
          </div>
        </div>
        <div className="page-hero__divider" />
      </section>

      {/* ── WAS WIR BIETEN ── */}
      <section className="section fp-services">
        <div className="container">
          <div className="reveal">
            <div className="section-label">{pageData?.servicesLabel || 'Das bieten wir'}</div>
            <h2 className="display-3">{pageData?.servicesTitle || 'Unser Leistungsumfang'}</h2>
            <div className="accent-line" />
          </div>
          <div className="fp-services__grid">
            {services.map((s, i) => (
              <div key={i} className={`fp-service-card card reveal reveal-delay-${i + 1}`}>
                <div className="fp-service-card__icon-wrap">
                  {iconMap[s.iconName] || <Search size={22} color="var(--green-600)" />}
                </div>
                <h3 className="heading-1">{s.title}</h3>
                <p className="body-sm fp-service-card__body">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROFILE ── */}
      <section className="section fp-profiles">
        <div className="container">
          <div className="reveal">
            <div className="section-label">{pageData?.profilesLabel || 'Profile'}</div>
            <h2 className="display-3">{pageData?.profilesTitle || 'Welche Fachkräfte wir vermitteln'}</h2>
            <div className="accent-line" />
          </div>
          <div className="fp-profiles__grid">
            {profiles.map((p, i) => (
              <div key={i} className={`fp-profile-card card reveal reveal-delay-${i + 1}`}>
                <h3 className="heading-1 fp-profile-card__title">{p.category}</h3>
                <ul className="fp-profile-card__list">
                  {(p.items || []).map((item, j) => (
                    <li key={j}>
                      <CheckCircle2 size={14} color="var(--green-600)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container">
          <div className="fp-cta reveal">
            <div className="fp-cta__glow" />
            <h2 className="display-3 fp-cta__title" style={{ color: 'var(--white)' }}>
              {pageData?.cta?.label || 'Bereit, Ihr Team zu verstärken?'}
            </h2>
            <p className="body-lg fp-cta__sub" style={{ color: 'rgba(255,255,255,0.9)' }}>
              {pageData?.cta?.title || 'Nehmen Sie jetzt Kontakt auf — unverbindlich und kostenlos.'}
            </p>
            <NavLink to="/kontakt" className="btn btn--outline" style={{ background: 'var(--white)', border: 'none', boxShadow: 'var(--shadow-sm)' }}>
              {pageData?.cta?.buttonText || 'Jetzt kontaktieren'} <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}

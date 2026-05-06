import { useState, useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'
import { NavLink } from 'react-router-dom'
import { client, urlFor } from '../lib/sanity'
import { Network, Clock, FolderOpen, CheckCircle2, ArrowRight } from 'lucide-react'
import './WorkFlexibly.css'

const iconMap = {
  Network: <Network size={22} color="var(--green-300)" />,
  Clock: <Clock size={22} color="var(--green-300)" />,
  FolderOpen: <FolderOpen size={22} color="var(--green-300)" />,
}

const IMAGES = {
  hero: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=760&h=640&fit=crop',
}

export default function WorkFlexibly() {
  useReveal()
  const [activeJob, setActiveJob] = useState(null)
  const [pageData, setPageData] = useState(null)

  useEffect(() => {
    client.fetch('*[_type == "candidatePage"][0]').then(setPageData)
  }, [])

  const benefits = pageData?.benefits?.length > 0 ? pageData.benefits : [
    { iconName: 'Network', title: 'Großes Netzwerk', description: 'Zugang zu Top-Kliniken und attraktiven Arbeitgebern.' },
    { iconName: 'Clock', title: 'Zeitersparnis', description: 'Wir übernehmen den Bewerbungsprozess für Sie.' },
    { iconName: 'FolderOpen', title: 'Bürokratie-Hilfe', description: 'Unterstützung bei Approbation und Visum.' },
  ]
  const jobTypes = pageData?.jobTypes?.length > 0 ? pageData.jobTypes : [
    { title: 'Zeitarbeit / Arbeitnehmerüberlassung', subtitle: 'Maximale Flexibilität', features: ['Überdurchschnittliches Gehalt', 'Garantierte Freizeit', 'Volle Flexibilität'] },
    { title: 'Festanstellung', subtitle: 'Langfristige Perspektive', features: ['Sicherheit', 'Karriereentwicklung', 'Teamzugehörigkeit'] },
    { title: 'Honorararzttätigkeit', subtitle: 'Unabhängigkeit pur', features: ['Höchste Verdienstmöglichkeiten', 'Freie Zeiteinteilung', 'Wechselnde Einsatzorte'] },
  ]
  return (
    <div className="wf-page">
      {/* ── PAGE HERO ── */}
      <section className="page-hero wf-hero">
        <div className="container page-hero__inner page-hero__inner--split">
          <div className="page-hero__text">
            <div className="section-label reveal">{pageData?.heroLabel || 'Flexibel arbeiten'}</div>
            <h1 className="display-1 reveal reveal-delay-1">
              {pageData?.heroTitle || 'Gemeinsam zum passenden Job!'}
            </h1>
            <p className="body-lg page-hero__sub reveal reveal-delay-2">
              {pageData?.heroSubtitle || 'Wir begleiten Sie Schritt für Schritt beim Einstieg in Ihre neue Stelle – ob national oder international.'}
            </p>
          </div>
          <div className="page-hero__img-col reveal--right">
            <img 
              src={pageData?.heroImage ? urlFor(pageData.heroImage).url() : IMAGES.hero} 
              alt="Ärztin im Gespräch" 
              className="page-hero__img" 
            />
          </div>
        </div>
        <div className="page-hero__divider" />
      </section>

      {/* ── VORTEILE ── */}
      <section className="section wf-benefits">
        <div className="container">
          <div className="reveal">
            <div className="section-label">{pageData?.benefitsLabel || 'Ihre Vorteile'}</div>
            <h2 className="display-3">{pageData?.benefitsTitle || 'Was Sie bei uns gewinnen'}</h2>
            <div className="accent-line" />
          </div>
          <div className="wf-benefits__grid">
            {benefits.map((b, i) => (
              <div key={i} className={`wf-benefit card reveal reveal-delay-${i + 1}`}>
                <div className="wf-benefit__icon-wrap">
                  {iconMap[b.iconName] || <Network size={22} color="var(--green-300)" />}
                </div>
                <h3 className="heading-1">{b.title}</h3>
                <p className="body-sm wf-benefit__body">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOB TYPES ── */}
      <section className="section wf-jobs">
        <div className="wf-jobs__bg" />
        <div className="container">
          <div className="reveal">
            <div className="section-label">{pageData?.jobsLabel || 'Jobmöglichkeiten'}</div>
            <h2 className="display-3">{pageData?.jobsTitle || 'Finden Sie Ihr perfektes Modell'}</h2>
            <div className="accent-line" />
          </div>
          <div className="wf-jobs__grid">
            {jobTypes.map((job, i) => (
              <div
                key={i}
                className={`wf-job-card card reveal reveal-delay-${i + 1}${activeJob === i ? ' wf-job-card--active' : ''}`}
                onClick={() => setActiveJob(activeJob === i ? null : i)}
              >
                <div className="wf-job-card__header">
                  <div>
                    <h3 className="heading-1 wf-job-card__title">{job.title}</h3>
                    <p className="body-sm wf-job-card__subtitle">{job.subtitle}</p>
                  </div>
                  <span className={`wf-job-card__arrow${activeJob === i ? ' wf-job-card__arrow--open' : ''}`}>
                    <ArrowRight size={18} />
                  </span>
                </div>
                <div className={`wf-job-card__features${activeJob === i ? ' wf-job-card__features--open' : ''}`}>
                  <ul>
                    {job.features.map((f, j) => (
                      <li key={j}>
                        <CheckCircle2 size={15} color="var(--green-300)" style={{ flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container">
          <div className="wf-cta reveal">
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="section-label" style={{ background: 'var(--white)', color: 'var(--green-700)', boxShadow: 'var(--shadow-sm)' }}>
                {pageData?.cta?.label || 'Ihr nächster Schritt'}
              </div>
              <h2 className="display-3" style={{ color: 'var(--white)' }}>
                {pageData?.cta?.title || 'Starten Sie Ihre Karriere mit Nexusbridge.'}
              </h2>
            </div>
            <NavLink to="/kontakt" className="btn btn--outline" style={{ background: 'var(--white)', border: 'none', flexShrink: 0, position: 'relative', zIndex: 1, boxShadow: 'var(--shadow-sm)' }}>
              {pageData?.cta?.buttonText || 'Jetzt bewerben'} <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { NavLink } from 'react-router-dom'
import { client, urlFor } from '../lib/sanity'
import { Target, Shield, Lightbulb, ArrowRight, Quote, Activity, CheckCircle2 } from 'lucide-react'
import SEO from '../components/SEO'
import './About.css'

const values = [
  { icon: <Target size={22} color="var(--green-600)" />, title: 'Präzision', body: 'Wir finden nicht irgendeine Fachkraft – sondern genau die richtige.' },
  { icon: <Shield size={22} color="var(--green-600)" />, title: 'Verlässlichkeit', body: 'Unser Wort gilt. Maßgeschneiderte Lösungen, auf die Sie sich verlassen können.' },
  { icon: <Lightbulb size={22} color="var(--green-600)" />, title: 'Innovation', body: 'Wir denken Personalvermittlung neu – effizienter, transparenter und moderner.' },
]

const preventionBenefits = [
  'Regelmäßige Gesundheitschecks direkt im Unternehmen',
  'Frühzeitige Erkennung von Gesundheitsrisiken',
  'Nachhaltige Senkung krankheitsbedingter Ausfallzeiten',
  'Stärkung der Mitarbeiterbindung durch Fürsorge',
  'Individuell angepasste Vorsorgekonzepte',
]

const WHO_IMAGE_DEFAULT = 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=760&q=80&fit=crop'
const PREVENTION_IMAGE = 'https://images.pexels.com/photos/5206949/pexels-photo-5206949.jpeg?auto=compress&cs=tinysrgb&w=760&q=80&fit=crop'

const iconMap = {
  Target: <Target size={22} color="var(--green-600)" />,
  Shield: <Shield size={22} color="var(--green-600)" />,
  Lightbulb: <Lightbulb size={22} color="var(--green-600)" />,
}

export default function About() {
  useReveal()
  const [pageData, setPageData] = useState(null)
  const [settings, setSettings] = useState(null)

  useEffect(() => {
    client.fetch('*[_type == "aboutPage"][0]').then(setPageData)
    client.fetch('*[_type == "siteSettings"][0]').then(setSettings)
  }, [])

  const milestones = pageData?.milestones?.length > 0 ? pageData.milestones : []
  const pageValues = pageData?.values || []
  
  const fallbackQuotes = [
    { text: 'Unsere Vision ist ein Gesundheitswesen ohne personelle Engpässe. Dafür arbeiten wir jeden Tag.', author: 'Nour Kh., Gründerin' },
    { text: 'Ein perfektes Match entsteht erst, wenn fachliche Expertise und menschliche Werte übereinstimmen.', author: 'Firas E., Gründer' },
  ]
  const quotes = pageData?.quotes?.length > 0 ? pageData.quotes : fallbackQuotes

  return (
    <div className="about-page">
      <SEO title={pageData?.seoTitle} description={pageData?.seoDescription} siteSettings={settings} />
      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="section-label reveal">{pageData?.heroLabel || 'Über uns'}</div>
          <h1 className="display-1 reveal reveal-delay-1">
            {pageData?.heroTitle || 'Wir sind Nexusbridge'}
          </h1>
          <p className="body-lg page-hero__sub reveal reveal-delay-2">
            {pageData?.heroSubtitle || 'Ein junges Unternehmen mit einer klaren Mission: die Personalvermittlung im Gesundheitswesen neu zu definieren.'}
          </p>
        </div>
        <div className="page-hero__divider" />
      </section>

      {/* ── WER WIR SIND ── */}
      <section className="section about-who">
        <div className="container about-who__inner">
          <div className="reveal--left">
            <div className="section-label">{pageData?.whoLabel || 'Wer wir sind'}</div>
            <h2 className="display-3">{pageData?.whoTitle || <><span className="text-accent">Das Bindeglied</span> im Gesundheitswesen</>}</h2>
            <div className="accent-line" />
            <p className="body-lg about-who__body">
              {pageData?.whoText || 'Wir sind ein junges Unternehmen, das als Bindeglied zwischen medizinischen Fachkräften und Gesundheitsorganisationen agiert – national wie international.'}
            </p>
          </div>
          <div className="about-who__visual reveal--right">
            <div className="about-who__img-frame">
              <img 
                src={pageData?.whoImage ? urlFor(pageData.whoImage).url() : WHO_IMAGE_DEFAULT} 
                alt="Medizinisches Team" 
                className="about-who__img" 
              />
            </div>
          </div>
        </div>

        {/* Quotes row — full width below the split */}
        <div className="container about-quotes reveal">
          <div className="about-quotes__grid">
            {quotes.map((q, i) => (
              <div key={i} className="about-quote-card card">
                <Quote size={20} color="var(--green-600)" style={{ flexShrink: 0 }} />
                <p className="body-sm about-quote-card__text">{q.text}</p>
                <div className="about-quote-card__author">
                  <div className="about-quote-card__dot" />
                  <span>{q.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRÄVENTIONSMEDIZIN ── */}
      <section className="section about-prevention">
        <div className="container about-prevention__inner">
          <div className="about-prevention__text reveal--left">
            <div className="section-label">Unser Fokus</div>
            <h2 className="display-3">
              {pageData?.prevention?.title || 'Präventionsmedizin —'}<br />
              <span className="text-accent">{pageData?.prevention?.subtitle || 'Gesundheit aktiv gestalten'}</span>
            </h2>
            <div className="accent-line" />
            <p className="body-lg about-prevention__body">
              {pageData?.prevention?.description || 'Wir entsenden qualifizierte Ärzte direkt zu Ihrem Unternehmen — für regelmäßige Gesundheitschecks und Vorsorgeuntersuchungen Ihrer Mitarbeitenden. So reduzieren Sie krankheitsbedingte Ausfälle nachhaltig und zeigen echte Fürsorge für Ihr Team.'}
            </p>
            <ul className="about-prevention__list">
              {(pageData?.prevention?.points || preventionBenefits).map((item, i) => (
                <li key={i} className="about-prevention__list-item">
                  <CheckCircle2 size={16} color="var(--green-600)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <NavLink to="/kontakt" className="btn btn--primary" style={{ marginTop: '2rem', alignSelf: 'flex-start' }}>
              Jetzt anfragen <ArrowRight size={16} />
            </NavLink>
          </div>
          <div className="about-prevention__visual reveal--right">
            <div className="about-prevention__img-frame">
              <img 
                src={pageData?.prevention?.image ? urlFor(pageData.prevention.image).url() : PREVENTION_IMAGE} 
                alt="Präventionsmedizin beim Unternehmen" 
                className="about-prevention__img" 
              />
            </div>
            <div className="about-prevention__stat card">
              <Activity size={22} color="var(--green-600)" />
              <div>
                <p className="about-prevention__stat-num">{pageData?.prevention?.statNumber || '−30%'}</p>
                <p className="about-prevention__stat-sub">{pageData?.prevention?.statLabel || 'weniger Krankheitsausfälle'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section about-values">
        <div className="container">
          <div className="reveal">
            <div className="section-label">{pageData?.valuesLabel || 'Unsere Werte'}</div>
            <h2 className="display-3">{pageData?.valuesTitle || 'Was uns antreibt'}</h2>
            <div className="accent-line" />
          </div>
          <div className="about-values__grid about-values__grid--3">
            {(pageValues.length > 0 ? pageValues : values).map((v, i) => (
              <div key={i} className={`about-value card reveal reveal-delay-${i + 1}`}>
                <div className="about-value__icon-wrap">
                  {iconMap[v.iconName] || v.icon || <Target size={22} color="var(--green-600)" />}
                </div>
                <h3 className="heading-1">{v.title}</h3>
                <p className="body-sm about-value__body">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HISTORY ── */}
      <section className="section about-history">
        <div className="about-history__bg" />
        <div className="container">
          <div className="reveal">
            <div className="section-label">{pageData?.historyLabel || 'Unsere Geschichte'}</div>
            <h2 className="display-3">
              {(() => {
                const title = pageData?.historyTitle || 'Von der Vision zur Wirklichkeit'
                if (title.includes('Wirklichkeit')) {
                  const parts = title.split('Wirklichkeit')
                  return <>{parts[0]}<span className="text-accent">Wirklichkeit</span>{parts[1]}</>
                }
                return title
              })()}
            </h2>
            <div className="accent-line" />
          </div>
          <div className="about-timeline">
            {milestones.map((m, i) => (
              <div key={i} className={`about-timeline__item reveal reveal-delay-${i + 1}`}>
                <div className="about-timeline__year">{m.year}</div>
                <div className="about-timeline__connector">
                  <div className="about-timeline__dot" />
                  {i < milestones.length - 1 && <div className="about-timeline__line" />}
                </div>
                <div className="about-timeline__content card">
                  <h3 className="heading-1">{m.title}</h3>
                  <p className="body-sm about-timeline__body">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container">
          <div className="about-cta reveal">
            <div className="about-cta__glow" />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="section-label" style={{ background: 'var(--white)', color: 'var(--green-700)', boxShadow: 'var(--shadow-sm)' }}>
                {pageData?.cta?.label || 'Netzwerk'}
              </div>
              <h2 className="display-3" style={{ color: 'var(--white)' }}>
                {pageData?.cta?.title || 'Profitieren Sie von unserem Netzwerk.'}
              </h2>
            </div>
            <NavLink to="/kontakt" className="btn btn--outline" style={{ background: 'var(--white)', border: 'none', flexShrink: 0, position: 'relative', zIndex: 1, boxShadow: 'var(--shadow-sm)' }}>
              {pageData?.cta?.buttonText || 'Kontaktieren Sie uns'} <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}

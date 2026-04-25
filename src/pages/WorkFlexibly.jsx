import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { NavLink } from 'react-router-dom'
import { Network, Clock, FolderOpen, CheckCircle2, ArrowRight, Banknote, Building2, Globe, Scale } from 'lucide-react'
import './WorkFlexibly.css'

const benefits = [
  {
    icon: <Network size={22} color="var(--green-300)" />,
    title: 'Netzwerk',
    body: 'Wir verfügen über ein breites Netzwerk von Kontakten zu renommierten Kliniken und medizinischen Einrichtungen.',
  },
  {
    icon: <Clock size={22} color="var(--green-300)" />,
    title: 'Zeitersparnis',
    body: 'Wir übernehmen die Suche nach passenden Stellenangeboten und kümmern uns um administrative Aufgaben wie Bewerbungen und Vertragsverhandlungen.',
  },
  {
    icon: <FolderOpen size={22} color="var(--green-300)" />,
    title: 'Verwaltung',
    body: 'Wir helfen bei der Beschaffung von Arbeitsgenehmigungen, Visa und anderen notwendigen Dokumenten und unterstützen bei der Organisation des Umzugs.',
  },
]

const jobTypes = [
  {
    id: 'zeitarbeit',
    title: 'Zeitarbeit',
    subtitle: '(Arbeitnehmerüberlassung)',
    features: [
      'Für Fachthemen und Teilprojekte',
      'Flexible Arbeitszeitgestaltung',
      'Attraktives, monatliches Gehalt',
      'Subsidiäre Versicherung (Berufshaftpflicht) inklusive',
      'Umfassender Service und Einsatzkoordination',
    ],
  },
  {
    id: 'befristet',
    title: 'Befristete Anstellung',
    subtitle: 'In Klinik oder Praxis',
    features: [
      'Anstellung in Klinik oder Praxis',
      'Flexible Arbeitszeitgestaltung',
      'Überdurchschnittliche Vergütung',
      'Urlaubsregelung direkt über die Einrichtung',
      'Rundum-Service und Koordination',
    ],
  },
  {
    id: 'unbefristet',
    title: 'Unbefristete Anstellung',
    subtitle: 'Dauerhaft und stabil',
    features: [
      'Dauerhafte Anstellung direkt in Klinik oder Praxis',
      'Individuell gestaltbare Arbeitszeiten',
      'Attraktive und überdurchschnittliche Vergütung',
      'Urlaub und weitere Regelungen direkt über die Einrichtung',
      'Persönlicher Rundum-Service und Unterstützung',
    ],
  },
]

const GULF_IMAGE = 'https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&w=760&h=840&fit=crop'
const HERO_IMAGE = 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=760&h=640&fit=crop'

const gulfHighlights = [
  { label: 'Wettbewerbsfähige Vergütung', icon: <Banknote size={20} color="var(--green-300)" /> },
  { label: 'Moderne Kliniken & Technologien', icon: <Building2 size={20} color="var(--green-300)" /> },
  { label: 'Internationale Teams', icon: <Globe size={20} color="var(--green-300)" /> },
  { label: 'Ausgewogene Work-Life-Balance', icon: <Scale size={20} color="var(--green-300)" /> },
]

export default function WorkFlexibly() {
  useReveal()
  const [activeJob, setActiveJob] = useState(null)

  return (
    <div className="wf-page">
      {/* ── PAGE HERO ── */}
      <section className="page-hero wf-hero">
        <div className="container page-hero__inner page-hero__inner--split">
          <div className="page-hero__text">
            <div className="section-label reveal">Flexibel arbeiten</div>
            <h1 className="display-1 reveal reveal-delay-1">
              <span className="text-accent">Gemeinsam</span> zum<br />
              passenden Job!
            </h1>
            <p className="body-lg page-hero__sub reveal reveal-delay-2">
              Wir begleiten Sie Schritt für Schritt beim Einstieg in Ihre neue Stelle –
              ob national oder international.
            </p>
          </div>
          <div className="page-hero__img-col reveal--right">
            <img src={HERO_IMAGE} alt="Ärztin im Gespräch" className="page-hero__img" />
          </div>
        </div>
        <div className="page-hero__divider" />
      </section>

      {/* ── VORTEILE ── */}
      <section className="section wf-benefits">
        <div className="container">
          <div className="reveal">
            <div className="section-label">Ihre Vorteile</div>
            <h2 className="display-3">Was Sie bei uns gewinnen</h2>
            <div className="accent-line" />
          </div>
          <div className="wf-benefits__grid">
            {benefits.map((b, i) => (
              <div key={i} className={`wf-benefit card reveal reveal-delay-${i + 1}`}>
                <div className="wf-benefit__icon-wrap">{b.icon}</div>
                <h3 className="heading-1">{b.title}</h3>
                <p className="body-sm wf-benefit__body">{b.body}</p>
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
            <div className="section-label">Jobmöglichkeiten</div>
            <h2 className="display-3">Finden Sie Ihr <span className="text-accent">perfektes Modell</span></h2>
            <div className="accent-line" />
          </div>
          <div className="wf-jobs__grid">
            {jobTypes.map((job, i) => (
              <div
                key={job.id}
                className={`wf-job-card card reveal reveal-delay-${i + 1}${activeJob === job.id ? ' wf-job-card--active' : ''}`}
                onClick={() => setActiveJob(activeJob === job.id ? null : job.id)}
              >
                <div className="wf-job-card__header">
                  <div>
                    <h3 className="heading-1 wf-job-card__title">{job.title}</h3>
                    <p className="body-sm wf-job-card__subtitle">{job.subtitle}</p>
                  </div>
                  <span className={`wf-job-card__arrow${activeJob === job.id ? ' wf-job-card__arrow--open' : ''}`}>
                    <ArrowRight size={18} />
                  </span>
                </div>
                <div className={`wf-job-card__features${activeJob === job.id ? ' wf-job-card__features--open' : ''}`}>
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

      {/* ── ARABISCHER GOLF ── */}
      <section className="section wf-gulf">
        <div className="container wf-gulf__inner">
          <div className="wf-gulf__img-col reveal--left">
            <div className="wf-gulf__img-frame">
              <img src={GULF_IMAGE} alt="Modernes Krankenhaus im arabischen Golf" className="wf-gulf__img" />
            </div>
          </div>
          <div className="wf-gulf__content reveal--right">
            <div className="section-label">Karriere im Ausland</div>
            <h2 className="display-2">Der Arabische Golf</h2>
            <div className="accent-line" />
            <p className="body-lg wf-gulf__body">
              Saudi-Arabien bietet außergewöhnliche Möglichkeiten für Fachkräfte im Gesundheitswesen.
              Das Land befindet sich in einem dynamischen Aufschwung, mit sehr guten Arbeitsbedingungen,
              wettbewerbsfähiger Vergütung und einer ausgewogenen Work-Life-Balance.
            </p>
            <p className="body-lg wf-gulf__body">
              Moderne Kliniken und Krankenhäuser setzen auf innovative Technologien und internationale
              Teams, um höchste Standards zu gewährleisten.
            </p>
            <div className="wf-gulf__highlights">
              {gulfHighlights.map((h, i) => (
                <div key={i} className="wf-gulf__highlight card">
                  {h.icon}
                  <span className="body-sm">{h.label}</span>
                </div>
              ))}
            </div>
            <NavLink to="/kontakt" className="btn btn--primary" style={{ marginTop: '0.5rem' }}>
              Jetzt informieren <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container">
          <div className="wf-cta reveal">
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="section-label" style={{ background: 'var(--white)', color: 'var(--green-700)', boxShadow: 'var(--shadow-sm)' }}>Ihr nächster Schritt</div>
              <h2 className="display-3" style={{ color: 'var(--white)' }}>Starten Sie Ihre Karriere mit Nexusbridge.</h2>
            </div>
            <NavLink to="/kontakt" className="btn btn--outline" style={{ background: 'var(--white)', border: 'none', flexShrink: 0, position: 'relative', zIndex: 1, boxShadow: 'var(--shadow-sm)' }}>
              Jetzt bewerben <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}

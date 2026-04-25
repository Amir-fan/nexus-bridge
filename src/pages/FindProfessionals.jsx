import { useReveal } from '../hooks/useReveal'
import { NavLink } from 'react-router-dom'
import { Search, FileText, Users, MessageCircle, CheckCircle2, ArrowRight } from 'lucide-react'
import './FindProfessionals.css'

const services = [
  {
    icon: <Search size={22} color="var(--green-300)" />,
    title: 'Rekrutierung & Qualifikationsprüfung',
    body: 'Prüfung und Auswahl qualifizierter Fachkräfte, um sicherzustellen, dass sie den Anforderungen der jeweiligen medizinischen Einrichtungen entsprechen.',
  },
  {
    icon: <FileText size={22} color="var(--green-300)" />,
    title: 'Organisation von Arbeitsgenehmigungen',
    body: 'Unterstützung bei der Beschaffung von Visa, Arbeitsgenehmigungen und anderen notwendigen Dokumenten.',
  },
  {
    icon: <Users size={22} color="var(--green-300)" />,
    title: 'Integration & Einarbeitung',
    body: 'Unterstützung der Fachkräfte bei der Integration in das neue Arbeitsumfeld, einschließlich kultureller Anpassung und Einarbeitungsprogramme.',
  },
  {
    icon: <MessageCircle size={22} color="var(--green-300)" />,
    title: 'Beratung & Nachbetreuung',
    body: 'Fortlaufende Unterstützung und Betreuung nach der Vermittlung, um eine nachhaltige Zufriedenheit und erfolgreiche Zusammenarbeit zu gewährleisten.',
  },
]

const profiles = [
  {
    cat: 'Ärztepersonal',
    items: ['Assistenzärzte', 'Fachärzte aller Fachrichtungen', 'Oberärzte', 'Chefärzte', 'Ärzte zur Festanstellung (Vollzeit & Teilzeit)'],
  },
  {
    cat: 'Pflegepersonal',
    items: ['Examinierte Gesundheits- und Krankenpfleger', 'Freiberufliche Fachkräfte im Pflegebereich', 'Pflegekräfte in Festanstellung', 'Altenpfleger/-innen'],
  },
  {
    cat: 'Medizinische Fachkraft',
    items: ['Fachgesundheits- und Krankenpflegekräfte (Anästhesie & Intensivpflege)', 'Fachpflegekräfte im Operationsdienst', 'OTAs, MTAs, MTLAs, MTRAs', 'Hebammen'],
  },
]

const immigration = [
  { step: '01', title: 'Qualifikationsprüfung', body: 'Wir stellen sicher, dass die medizinischen Abschlüsse den Anforderungen des Ziellandes entsprechen und anerkannt werden.' },
  { step: '02', title: 'Beschaffung von Dokumenten', body: 'Wir unterstützen beim Sammeln und Beglaubigen aller notwendigen Unterlagen wie Diplome, Arbeitszeugnisse, Sprachzertifikate.' },
  { step: '03', title: 'Beantragung der Arbeitsgenehmigung', body: 'Wir helfen bei der Einreichung von Anträgen bei den zuständigen Einwanderungsbehörden.' },
  { step: '04', title: 'Länderspezifische Anforderungen', body: 'Wir vermitteln Kurse für zusätzliche Prüfungen oder Anpassungskurse, die von manchen Ländern verlangt werden.' },
  { step: '05', title: 'Planung der Einreise', body: 'Wir planen mit den Fachkräften die Einreise und den Arbeitsbeginn unter Berücksichtigung aller rechtlichen Anforderungen.' },
]

const PAGE_IMAGE = 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=900&h=640&fit=crop'

export default function FindProfessionals() {
  useReveal()

  return (
    <div className="fp-page">
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="container page-hero__inner page-hero__inner--split">
          <div className="page-hero__text">
            <div className="section-label reveal">Fachkräfte finden</div>
            <h1 className="display-1 reveal reveal-delay-1">
              Qualifiziertes Personal —<br />
              <span className="text-accent">schnell und zuverlässig</span>
            </h1>
            <p className="body-lg page-hero__sub reveal reveal-delay-2">
              Sie suchen dringend Fachpersonal für Ihre Klinik, haben aber keine Zeit und
              Ressourcen diese zu finden? Genau hier setzen wir an.
            </p>
          </div>
          <div className="page-hero__img-col reveal--right">
            <img
              src={PAGE_IMAGE}
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
            <div className="section-label">Das bieten wir</div>
            <h2 className="display-3">Unser Leistungsumfang</h2>
            <div className="accent-line" />
          </div>
          <div className="fp-services__grid">
            {services.map((s, i) => (
              <div key={i} className={`fp-service-card card reveal reveal-delay-${i + 1}`}>
                <div className="fp-service-card__icon-wrap">{s.icon}</div>
                <h3 className="heading-1">{s.title}</h3>
                <p className="body-sm fp-service-card__body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROFILE ── */}
      <section className="section fp-profiles">
        <div className="container">
          <div className="reveal">
            <div className="section-label">Profile</div>
            <h2 className="display-3">Welche Fachkräfte wir vermitteln</h2>
            <div className="accent-line" />
          </div>
          <div className="fp-profiles__grid">
            {profiles.map((p, i) => (
              <div key={i} className={`fp-profile-card card reveal reveal-delay-${i + 1}`}>
                <h3 className="heading-1 fp-profile-card__title">{p.cat}</h3>
                <ul className="fp-profile-card__list">
                  {p.items.map((item, j) => (
                    <li key={j}>
                      <CheckCircle2 size={14} color="var(--green-300)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EINWANDERUNGSSERVICE ── */}
      <section className="section fp-immigration">
        <div className="fp-immigration__bg" />
        <div className="container">
          <div className="reveal">
            <div className="section-label">Einwanderungsservice</div>
            <h2 className="display-3">Internationale Fachkräfte <span className="text-accent">reibungslos integrieren</span></h2>
            <div className="accent-line" />
            <p className="body-lg fp-immigration__intro">
              Folgende Leistungen bieten wir an und unterstützen bei der Vermittlung von Fachkräften aus dem Ausland:
            </p>
          </div>
          <div className="fp-immigration__steps">
            {immigration.map((item, i) => (
              <div key={i} className={`fp-immigration__step reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="fp-immigration__step-num">{item.step}</div>
                <div className="fp-immigration__step-body">
                  <h3 className="heading-1">{item.title}</h3>
                  <p className="body-sm" style={{ marginTop: '0.5rem' }}>{item.body}</p>
                </div>
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
            <h2 className="display-3 fp-cta__title" style={{ color: 'var(--white)' }}>Bereit, Ihr Team zu verstärken?</h2>
            <p className="body-lg fp-cta__sub" style={{ color: 'rgba(255,255,255,0.9)' }}>Nehmen Sie jetzt Kontakt auf — unverbindlich und kostenlos.</p>
            <NavLink to="/kontakt" className="btn btn--outline" style={{ background: 'var(--white)', border: 'none', boxShadow: 'var(--shadow-sm)' }}>
              Jetzt kontaktieren <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}

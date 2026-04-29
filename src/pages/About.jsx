import { useReveal } from '../hooks/useReveal'
import { NavLink } from 'react-router-dom'
import { Target, Shield, Lightbulb, ArrowRight, Quote, Activity, CheckCircle2 } from 'lucide-react'
import './About.css'

const milestones = [
  {
    year: '2024',
    title: 'Gründung',
    body: 'Unser Unternehmen entstand mit der Vision, die Personalvermittlung im Gesundheitswesen neu zu definieren.',
  },
  {
    year: '2024',
    title: 'Erste Vermittlungen',
    body: 'Durch die Kombination von medizinischem Fachwissen und Expertise in Prozessoptimierung stellten wir erste erfolgreiche Vermittlungen sicher.',
  },
  {
    year: 'Heute',
    title: 'Wachsende Plattform',
    body: 'Unsere Plattform bringt medizinisches Fachpersonal und Gesundheitseinrichtungen direkt zusammen und setzt neue Maßstäbe in Effizienz und Qualität.',
  },
]

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

const WHO_IMAGE = 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=760&q=80&fit=crop'
const PREVENTION_IMAGE = 'https://images.pexels.com/photos/8376235/pexels-photo-8376235.jpeg?auto=compress&cs=tinysrgb&w=760&q=80&fit=crop'

export default function About() {
  useReveal()

  return (
    <div className="about-page">
      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <div className="section-label reveal">Über uns</div>
          <h1 className="display-1 reveal reveal-delay-1">
            Wir sind <span className="text-accent">Nexusbridge</span>
          </h1>
          <p className="body-lg page-hero__sub reveal reveal-delay-2">
            Ein junges Unternehmen mit einer klaren Mission: die Personalvermittlung im Gesundheitswesen
            neu zu definieren.
          </p>
        </div>
        <div className="page-hero__divider" />
      </section>

      {/* ── WER WIR SIND ── */}
      <section className="section about-who">
        <div className="container about-who__inner">
          <div className="reveal--left">
            <div className="section-label">Wer wir sind</div>
            <h2 className="display-3">Das Bindeglied im <span className="text-accent">Gesundheitswesen</span></h2>
            <div className="accent-line" />
            <p className="body-lg about-who__body">
              Wir sind ein junges Unternehmen, das als Bindeglied zwischen medizinischen Fachkräften
              und Gesundheitsorganisationen agiert – national wie international. Unser Kerngeschäft
              umfasst die beidseitige Vermittlung: Wir platzieren qualifizierte Fachkräfte in Kliniken
              und bieten gleichzeitig Gesundheitseinrichtungen Zugang zu einem Pool hochqualifizierter
              Mitarbeitender.
            </p>
            <p className="body-lg about-who__body">
              Ergänzend dazu führen wir Gesundheitsscreenings für Unternehmen durch, um die Gesundheit
              ihrer Teams zu fördern. Unser Ziel: maßgeschneiderte, verlässliche Lösungen für alle
              Beteiligten im Gesundheitssektor.
            </p>
          </div>
          <div className="about-who__visual reveal--right">
            <div className="about-who__img-frame">
              <img src={WHO_IMAGE} alt="Medizinisches Team" className="about-who__img" />
            </div>
          </div>
        </div>

        {/* Quotes row — full width below the split */}
        <div className="container about-quotes reveal">
          <div className="about-quotes__grid">
            <div className="about-quote-card card">
              <Quote size={20} color="var(--green-600)" style={{ flexShrink: 0 }} />
              <p className="body-sm about-quote-card__text">
                Unser Anspruch ist es, die Personalvermittlung im Gesundheitswesen nachhaltig zu
                verbessern und für alle Beteiligten einen echten Mehrwert zu schaffen.
              </p>
              <div className="about-quote-card__author">
                <div className="about-quote-card__dot" />
                <span>Louis Alwani, Gründer</span>
              </div>
            </div>
            <div className="about-quote-card card">
              <Quote size={20} color="var(--green-600)" style={{ flexShrink: 0 }} />
              <p className="body-sm about-quote-card__text">
                Präventionsmedizin ist keine Kostenstelle – sie ist die beste Investition,
                die ein Unternehmen in seine Mitarbeitenden treffen kann.
              </p>
              <div className="about-quote-card__author">
                <div className="about-quote-card__dot" />
                <span>Tim Schamel, Gründer &amp; Arzt</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRÄVENTIONSMEDIZIN ── */}
      <section className="section about-prevention">
        <div className="container about-prevention__inner">
          <div className="about-prevention__text reveal--left">
            <div className="section-label">Unser Fokus</div>
            <h2 className="display-3">
              Präventionsmedizin —<br />
              <span className="text-accent">Gesundheit aktiv gestalten</span>
            </h2>
            <div className="accent-line" />
            <p className="body-lg about-prevention__body">
              Wir entsenden qualifizierte Ärzte direkt zu Ihrem Unternehmen — für regelmäßige
              Gesundheitschecks und Vorsorgeuntersuchungen Ihrer Mitarbeitenden. So reduzieren Sie
              krankheitsbedingte Ausfälle nachhaltig und zeigen echte Fürsorge für Ihr Team.
            </p>
            <ul className="about-prevention__list">
              {preventionBenefits.map((item, i) => (
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
              <img src={PREVENTION_IMAGE} alt="Präventionsmedizin beim Unternehmen" className="about-prevention__img" />
            </div>
            <div className="about-prevention__stat card">
              <Activity size={22} color="var(--green-600)" />
              <div>
                <p className="about-prevention__stat-num">−30%</p>
                <p className="about-prevention__stat-sub">weniger Krankheitsausfälle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section about-values">
        <div className="container">
          <div className="reveal">
            <div className="section-label">Unsere Werte</div>
            <h2 className="display-3">Was uns antreibt</h2>
            <div className="accent-line" />
          </div>
          <div className="about-values__grid about-values__grid--3">
            {values.map((v, i) => (
              <div key={i} className={`about-value card reveal reveal-delay-${i + 1}`}>
                <div className="about-value__icon-wrap">{v.icon}</div>
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
            <div className="section-label">Unsere Geschichte</div>
            <h2 className="display-3">Von der Vision zur <span className="text-accent">Wirklichkeit</span></h2>
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
                  <p className="body-sm about-timeline__body">{m.body}</p>
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
              <div className="section-label" style={{ background: 'var(--white)', color: 'var(--green-700)', boxShadow: 'var(--shadow-sm)' }}>Netzwerk</div>
              <h2 className="display-3" style={{ color: 'var(--white)' }}>Profitieren Sie von unserem Netzwerk.</h2>
            </div>
            <NavLink to="/kontakt" className="btn btn--outline" style={{ background: 'var(--white)', border: 'none', flexShrink: 0, position: 'relative', zIndex: 1, boxShadow: 'var(--shadow-sm)' }}>
              Kontaktieren Sie uns <ArrowRight size={16} />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}

import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import {
  Stethoscope,
  Globe,
  HeartPulse,
  ArrowRight,
  Building2,
  ClipboardCheck,
  Users,
  BadgeCheck,
  Calendar,
  Search,
  Activity,
  CheckCircle2,
} from 'lucide-react'
import './Home.css'

const IMAGES = {
  hero: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop',
  about: 'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=760&h=920&fit=crop',
  gulf: 'https://images.pexels.com/photos/3826678/pexels-photo-3826678.jpeg?auto=compress&cs=tinysrgb&w=760&h=840&fit=crop',
  prevention: 'https://images.pexels.com/photos/8376235/pexels-photo-8376235.jpeg?auto=compress&cs=tinysrgb&w=760&h=600&fit=crop',
}

// Team — swap src values with real headshots when provided
const TEAM = [
  {
    name: 'Louis Alwani',
    role: 'Gründer',
    photo: 'images/Louis Alwani.jpeg',
    bio: 'Visionär und Stratege. Louis bringt tiefes Verständnis für den Personalmarkt mit und leitet die strategische Ausrichtung von Nexusbridge, um Gesundheitseinrichtungen und Fachkräfte optimal zu vernetzen.'
  },
  {
    name: 'Sabine Weigand',
    role: 'Finanz- und Verwaltungsleiterin',
    photo: 'images/Sabine Weigand.jpeg',
    bio: 'Das Rückgrat des Unternehmens. Sabine sorgt für reibungslose finanzielle und administrative Abläufe und schafft so die Basis für das nachhaltige Wachstum von Nexusbridge.'
  },
  {
    name: 'Nada Alwani',
    role: 'Human Resources',
    photo: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    bio: 'Expertin für Menschen. Nada begleitet unsere Fachkräfte vom ersten Kontakt bis zur erfolgreichen Integration und sorgt für höchste Zufriedenheit auf allen Seiten.'
  },
  {
    name: 'Tim Schamel',
    role: 'Gründer & Arzt',
    photo: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    bio: 'Aus der Praxis, für die Praxis. Als Arzt kennt Tim die Herausforderungen im Klinikalltag genau und stellt sicher, dass unsere Vermittlungs- und Präventionskonzepte höchsten medizinischen Ansprüchen genügen.'
  },
  {
    name: 'Wolfgang Lezuo',
    role: 'Arzt',
    photo: 'https://images.pexels.com/photos/582750/pexels-photo-582750.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop',
    bio: 'Medizinische Exzellenz. Wolfgang unterstützt mit seiner weitreichenden Expertise in der ärztlichen Versorgung und Qualitätssicherung unserer Präventionsprogramme.'
  },
]

const PREVENTION_POINTS = [
  'Ärzte kommen direkt zu Ihrem Unternehmen',
  'Individuelle Gesundheitschecks & Vorsorgeuntersuchungen',
  'Nachhaltige Senkung von Krankheitsausfällen',
  'Stärkung der Mitarbeiterbindung durch aktive Fürsorge',
]

export default function Home() {
  useReveal()

  return (
    <div className="home">

      {/* ─────────────── HERO ─────────────── */}
      <section className="hero">
        <div className="hero__bg-gradient" />

        <div className="container hero__inner">
          {/* LEFT */}
          <div className="hero__content">
            <div className="section-label reveal">Nexusbridge Medical</div>

            <h1 className="display-1 hero__headline reveal reveal-delay-1">
              Medizinische<br />
              Fachkräfte{' '}
              <span className="text-accent">weltweit</span>{' '}
              verfügbar
            </h1>

            <p className="body-lg hero__sub reveal reveal-delay-2">
              Wir verbinden qualifizierte Ärzte und Pflegepersonal mit
              Gesundheitseinrichtungen — schnell, zuverlässig und maßgeschneidert.
            </p>

            <div className="hero__actions reveal reveal-delay-3">
              <NavLink to="/kontakt" className="btn btn--primary">
                <Calendar size={18} /> Termin vereinbaren
              </NavLink>
              <NavLink to="/fachkraefte-finden" className="btn btn--outline">
                <Search size={18} /> Fachkräfte finden
              </NavLink>
            </div>

            <div className="hero__stats reveal reveal-delay-4">
              <div className="hero__stat">
                <span className="hero__stat-number">100+</span>
                <span className="hero__stat-label">Vermittlungen</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-number">Global</span>
                <span className="hero__stat-label">Einsatzgebiete</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-number">3</span>
                <span className="hero__stat-label">Kernleistungen</span>
              </div>
            </div>
          </div>

          {/* RIGHT – image */}
          <div className="hero__image-wrap reveal--right">
            <div className="hero__image-frame">
              <img src={IMAGES.hero} alt="Medizinisches Fachpersonal" className="hero__image" />

              {/* Floating Pill 1: Top Left */}
              <div className="hero__float-pill hero__float-pill--top card">
                <HeartPulse size={16} color="var(--green-500)" />
                <span>Zertifizierte Fachkräfte</span>
              </div>

              {/* Floating Card: Bottom Left */}
              <div className="hero__float-card card">
                <div className="hero__float-icon">
                  <Stethoscope size={20} color="var(--green-500)" />
                </div>
                <div className="hero__float-text">
                  <span className="hero__float-title">Orthopädie</span>
                  <div className="hero__float-avatars">
                    <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop" alt="Doctor" />
                    <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop" alt="Doctor" />
                    <span className="hero__float-more">+12</span>
                  </div>
                </div>
              </div>

              {/* Floating Pill 2: Top Right */}
              <div className="hero__float-pill hero__float-pill--right card">
                <Globe size={16} color="var(--green-500)" />
                <span>Internationale Expertise</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── PARTNER / ABOUT ─────────────── */}
      <section className="about-strip section">
        <div className="container about-strip__inner">

          {/* Image column */}
          <div className="about-strip__img-col reveal--left">
            <div className="about-strip__img-frame">
              <img src={IMAGES.about} alt="Modernes Krankenhaus" className="about-strip__img" />
            </div>
            {/* Floating stat */}
            <div className="about-strip__float card">
              <Building2 size={24} color="var(--green-500)" />
              <div>
                <p className="about-strip__float-num">2024</p>
                <p className="about-strip__float-sub">Gegründet in Karlsruhe</p>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="about-strip__text reveal--right">
            <div className="section-label">Das ist Nexusbridge</div>
            <h2 className="display-3">
              Ihr Partner im <span className="text-accent">Gesundheitssektor</span>
            </h2>
            <div className="accent-line" />
            <p className="body-lg about-strip__body">
              Nexusbridge verbindet medizinische Fachkräfte mit Gesundheitsorganisationen –
              national und international. Wir platzieren qualifizierte Fachkräfte in Kliniken
              und bieten Einrichtungen gleichzeitig Zugang zu einem Pool erstklassiger
              Mitarbeitender.
            </p>

            {/* Feature chips */}
            <div className="about-strip__features">
              {[
                { icon: <Stethoscope size={16} />, label: 'Ärztevermittlung' },
                { icon: <Globe size={16} />, label: 'International' },
                { icon: <HeartPulse size={16} />, label: 'Gesundheitsscreening' },
                { icon: <Users size={16} />, label: 'Pflegepersonal' },
              ].map(f => (
                <div key={f.label} className="about-strip__chip card">
                  {f.icon} <span>{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── UNSERE BEREICHE ─────────────── */}
      <section className="bereiche section" id="bereiche">
        <div className="container">
          <div className="bereiche__header reveal">
            <div className="section-label">Unsere Bereiche</div>
            <h2 className="display-2">Was wir für Sie tun</h2>
          </div>

          <div className="bereiche__grid">
            {/* Card 1 */}
            <div className="bereiche__card card reveal reveal-delay-1">
              <div className="bereiche__card-icon-wrap">
                <Building2 size={24} color="var(--green-500)" />
              </div>
              <h3 className="heading-1 bereiche__card-title">Qualifiziertes Fachpersonal finden</h3>
              <p className="body-sm bereiche__card-body">
                Unsere Ärztevermittlung sorgt dafür, dass Sie schnell die ideale medizinische
                Fachkraft finden – aus einem umfangreichen Pool an Assistenz- und Fachärzten
                aller Fachbereiche.
              </p>
              <NavLink to="/fachkraefte-finden" className="bereiche__card-link">
                Mehr erfahren <ArrowRight size={14} />
              </NavLink>
            </div>

            {/* Card 2 */}
            <div className="bereiche__card card reveal reveal-delay-2">
              <div className="bereiche__card-icon-wrap">
                <Users size={24} color="var(--green-500)" />
              </div>
              <h3 className="heading-1 bereiche__card-title">Karriere als Fachkraft</h3>
              <p className="body-sm bereiche__card-body">
                Wir begleiten Sie bei Ihrem nächsten Karriereschritt. Durch unser großes
                Netzwerk bringen wir Sie mit renommierten medizinischen Einrichtungen im
                Inland und im Ausland in Kontakt.
              </p>
              <NavLink to="/flexibel-arbeiten" className="bereiche__card-link">
                Mehr erfahren <ArrowRight size={14} />
              </NavLink>
            </div>

            {/* Card 3 – wide */}
            <div className="bereiche__card bereiche__card--wide card reveal reveal-delay-3">
              <div className="bereiche__card-wide-inner">
                <div className="bereiche__wide-item">
                  <div className="bereiche__card-icon-wrap">
                    <ClipboardCheck size={20} color="var(--green-500)" />
                  </div>
                  <h3 className="heading-2 bereiche__card-title">Zeitarbeit (ANÜ)</h3>
                  <p className="body-sm bereiche__card-body">
                    Wir übernehmen sämtliche Vertragsangelegenheiten, Abrechnungen und
                    organisatorische Aufgaben für Ihre Einsätze.
                  </p>
                </div>
                <div className="bereiche__wide-item">
                  <div className="bereiche__card-icon-wrap">
                    <Globe size={20} color="var(--green-500)" />
                  </div>
                  <h3 className="heading-2 bereiche__card-title">Karriere im Ausland</h3>
                  <p className="body-sm bereiche__card-body">
                    Eng vernetzt mit führenden Kliniken weltweit – insbesondere im
                    arabischen Golf.
                  </p>
                </div>
                <div className="bereiche__wide-item">
                  <div className="bereiche__card-icon-wrap">
                    <Stethoscope size={20} color="var(--green-500)" />
                  </div>
                  <h3 className="heading-2 bereiche__card-title">Festanstellung</h3>
                  <p className="body-sm bereiche__card-body">
                    Wir vermitteln für diverse Einrichtungen und unterstützen bei allen
                    organisatorischen Aspekten einer dauerhaften Anstellung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── PRÄVENTIONSMEDIZIN ─────────────── */}
      <section className="prevention section">
        <div className="container prevention__inner">
          <div className="prevention__text reveal--left">
            <div className="section-label">Präventionsmedizin</div>
            <h2 className="display-3">
              Gesundheit im Unternehmen —{' '}
              <span className="text-accent">aktiv schützen</span>
            </h2>
            <div className="accent-line" />
            <p className="body-lg prevention__body">
              Wir entsenden qualifizierte Ärzte direkt zu Ihrem Unternehmen. Durch regelmäßige
              Vorsorgeuntersuchungen Ihrer Mitarbeitenden senken Sie krankheitsbedingte Ausfälle
              nachhaltig — und zeigen echte Fürsorge für Ihr Team.
            </p>
            <ul className="prevention__list">
              {PREVENTION_POINTS.map((item, i) => (
                <li key={i} className="prevention__list-item">
                  <CheckCircle2 size={16} color="var(--green-600)" style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <NavLink to="/kontakt" className="btn btn--primary prevention__cta">
              Jetzt anfragen <ArrowRight size={16} />
            </NavLink>
          </div>
          <div className="prevention__visual reveal--right">
            <div className="prevention__img-frame">
              <img src={IMAGES.prevention} alt="Betriebliche Gesundheitsvorsorge" className="prevention__img" />
            </div>
            <div className="prevention__stat card">
              <Activity size={22} color="var(--green-600)" />
              <div>
                <p className="prevention__stat-num">−30%</p>
                <p className="prevention__stat-sub">weniger Krankheitsausfälle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── PROCESS ─────────────── */}
      <section className="process section">
        <div className="container">
          <div className="process__header reveal">
            <div className="section-label">So arbeiten wir zusammen</div>
            <h2 className="display-2">
              In drei Schritten <span className="text-accent">zum Ziel</span>
            </h2>
          </div>

          <div className="process__steps">
            {[
              {
                num: '01',
                icon: <ClipboardCheck size={24} color="var(--green-500)" />,
                title: 'Registrierung',
                body: 'Über unser Kontaktformular registrieren Sie sich unverbindlich als medizinische Fachkraft oder Einrichtung.',
              },
              {
                num: '02',
                icon: <Users size={24} color="var(--green-500)" />,
                title: 'Erstgespräch',
                body: 'Wir laden Sie zu einem ersten Gespräch ein und besprechen Informationen, Anforderungen und erarbeiten passgenaue Vorschläge.',
              },
              {
                num: '03',
                icon: <BadgeCheck size={24} color="var(--green-500)" />,
                title: 'Beratung',
                body: 'Gemeinsam besprechen wir die verfügbaren Optionen und beraten Sie bei der richtigen Auswahl für eine nachhaltige Zusammenarbeit.',
              },
            ].map((s, i) => (
              <div key={i} className={`process__step card reveal reveal-delay-${i + 1}`}>
                <div className="process__step-icon-wrap">
                  {s.icon}
                </div>
                <h3 className="heading-1 process__step-title">{s.title}</h3>
                <p className="body-sm process__step-body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── TEAM ─────────────── */}
      <section className="team-section section">
        <div className="container">
          <div className="team-section__header reveal">
            <div className="section-label">Unser Team</div>
            <h2 className="display-2">
              Die Menschen hinter <span className="text-accent">Nexusbridge</span>
            </h2>
          </div>
          <div className="team-section__grid">
            {TEAM.map((member, i) => (
              <div key={i} className={`team-card reveal reveal-delay-${i + 1}`}>
                <div className="team-card__photo-wrap">
                  <img src={member.photo} alt={member.name} className="team-card__photo" />
                </div>
                <div className="team-card__info">
                  <h3 className="team-card__name">{member.name}</h3>
                  <p className="team-card__role">{member.role}</p>
                </div>
                
                {/* Hover overlay */}
                <div className="team-card__overlay">
                  <h3 className="team-card__overlay-name">{member.name}</h3>
                  <p className="team-card__overlay-role">{member.role}</p>
                  <p className="team-card__overlay-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── CTA ─────────────── */}
      <section className="cta-strip section">
        <div className="container">
          <div className="cta-strip__inner reveal">
            <div className="cta-strip__bg" />
            <div className="cta-strip__text">
              <div className="section-label" style={{ background: 'var(--white)', color: 'var(--green-700)', boxShadow: 'var(--shadow-sm)' }}>Bereit loszulegen?</div>
              <h2 className="display-3" style={{ color: 'var(--white)' }}>Finden Sie genau das, was Sie suchen.</h2>
            </div>
            <div className="cta-strip__actions">
              <NavLink to="/kontakt" className="btn btn--outline" style={{ background: 'var(--white)', border: 'none', boxShadow: 'var(--shadow-sm)' }}>
                Jetzt Kontakt aufnehmen
              </NavLink>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

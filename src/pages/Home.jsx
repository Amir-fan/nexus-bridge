import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { client, urlFor } from '../lib/sanity'
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
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'
import SEO from '../components/SEO'
import './Home.css'

const iconMap = {
  Stethoscope: <Stethoscope size={24} color="var(--green-500)" />,
  Globe: <Globe size={24} color="var(--green-500)" />,
  Building2: <Building2 size={24} color="var(--green-500)" />,
  Users: <Users size={24} color="var(--green-500)" />,
  ClipboardCheck: <ClipboardCheck size={24} color="var(--green-500)" />,
  BadgeCheck: <BadgeCheck size={24} color="var(--green-500)" />,
  ShieldCheck: <ShieldCheck size={24} color="var(--green-500)" />,
  TrendingUp: <TrendingUp size={24} color="var(--green-500)" />,
}

const IMAGES = {
  hero: 'https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop',
  about: 'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=760&h=920&fit=crop',
  gulf: 'https://images.pexels.com/photos/3826678/pexels-photo-3826678.jpeg?auto=compress&cs=tinysrgb&w=760&h=840&fit=crop',
  prevention: 'https://images.pexels.com/photos/8376235/pexels-photo-8376235.jpeg?auto=compress&cs=tinysrgb&w=760&h=600&fit=crop',
}

const PREVENTION_POINTS = [
  'Ärzte kommen direkt zu Ihrem Unternehmen',
  'Individuelle Gesundheitschecks & Vorsorgeuntersuchungen',
  'Nachhaltige Senkung von Krankheitsausfällen',
  'Stärkung der Mitarbeiterbindung durch aktive Fürsorge',
]

export default function Home() {
  useReveal()
  const [hero, setHero] = useState(null)
  const [homeData, setHomeData] = useState(null)
  const [services, setServices] = useState([])
  const [team, setTeam] = useState([])
  const [steps, setSteps] = useState([])
  const [settings, setSettings] = useState(null)

  useEffect(() => {
    // Fetch Hero
    client.fetch('*[_type == "hero"][0]').then(setHero)
    // Fetch HomePage Zusatz
    client.fetch('*[_type == "homePage"][0]').then(setHomeData)
    // Fetch Services
    client.fetch('*[_type == "service"]').then(setServices)
    // Fetch Steps
    client.fetch('*[_type == "processStep"] | order(number asc)').then(setSteps)
    // Fetch Team
    client.fetch('*[_type == "team"] | order(order asc)').then(setTeam)
    // Fetch Settings
    client.fetch('*[_type == "siteSettings"][0]').then(setSettings)
  }, [])

  const fallbackServices = [
    { _id: '1', iconName: 'Stethoscope', title: 'Ärztevermittlung', description: 'Passgenaue Vermittlung von Fach- und Führungskräften für Kliniken und Praxen.', link: '/fachkraefte-finden' },
    { _id: '2', iconName: 'Users', title: 'Pflegepersonal', description: 'Hochqualifizierte Pflegekräfte für Intensiv-, OP- und Allgemeinpflege.', link: '/fachkraefte-finden' },
    { _id: '3', iconName: 'Globe', title: 'Internationale Fachkräfte', description: 'Wir begleiten internationale Talente vom Sprachkurs bis zur Approbation.', link: '/fachkraefte-finden' },
  ]
  const displayServices = services?.length > 0 ? services : fallbackServices

  const fallbackSteps = [
    { _id: '1', iconName: 'ClipboardCheck', title: 'Bedarfsanalyse', description: 'Wir verstehen Ihre genauen Anforderungen und erstellen ein Profil.' },
    { _id: '2', iconName: 'Search', title: 'Matching', description: 'Unsere Experten finden die Kandidaten, die fachlich und menschlich passen.' },
    { _id: '3', iconName: 'BadgeCheck', title: 'Integration', description: 'Wir begleiten den gesamten Onboarding-Prozess für einen reibungslosen Start.' },
  ]
  const displaySteps = steps?.length > 0 ? steps : fallbackSteps

  const fallbackTeam = [
    { _id: '1', name: 'Louis Alwani', role: 'Gründer', bio: 'Visionär und Stratege.', photoLocal: '/nexus-bridge/images/Louis Alwani.jpeg' },
    { _id: '2', name: 'Sabine Weigand', role: 'Finanz- und Verwaltungsleiterin', bio: 'Das Rückgrat des Unternehmens.', photoLocal: '/nexus-bridge/images/Sabine Weigand.jpeg' },
    { _id: '3', name: 'Nada Alwani', role: 'Human Resources', bio: 'Expertin für Menschen.', photoLocal: '/nexus-bridge/images/nada alwani.jpeg' },
    { _id: '4', name: 'Tim Schamel', role: 'Gründer & Arzt', bio: 'Medizinische Exzellenz.', photoLocal: '/nexus-bridge/images/tim.jpeg' },
    { _id: '5', name: 'Wolfgang Lezuo', role: 'Arzt', bio: 'Medizinische Exzellenz.', photoLocal: '/nexus-bridge/images/Wolfgang.jpeg' },
  ]
  const displayTeam = team?.length > 0 ? team : fallbackTeam

  return (
    <div className="home">
      <SEO title={homeData?.seoTitle} description={homeData?.seoDescription} siteSettings={settings} />

      {/* ─────────────── HERO ─────────────── */}
      <section className="hero">
        <div className="hero__bg-gradient" />

        <div className="container hero__inner">
          {/* LEFT */}
          <div className="hero__content">
            <div className="section-label reveal">Nexusbridge Medical</div>

            <h1 className="display-1 hero__headline reveal reveal-delay-1">
              {(() => {
                const title = hero?.title || 'Medizinische Fachkräfte weltweit verfügbar'
                const accent = hero?.accentWord || 'weltweit'
                if (!title.includes(accent)) return title
                const parts = title.split(accent)
                return (
                  <>
                    {parts[0]}
                    <span className="text-accent">{accent}</span>
                    {parts[1]}
                  </>
                )
              })()}
            </h1>

            <p className="body-lg hero__sub reveal reveal-delay-2">
              {hero?.subtitle || 'Wir verbinden qualifizierte Ärzte und Pflegepersonal mit Gesundheitseinrichtungen — schnell, zuverlässig und maßgeschneidert.'}
            </p>

            <div className="hero__actions reveal reveal-delay-3">
              <NavLink to="/kontakt" className="btn btn--primary">
                <Calendar size={18} /> {hero?.primaryCta || 'Termin vereinbaren'}
              </NavLink>
              <NavLink to="/fachkraefte-finden" className="btn btn--outline">
                <Search size={18} /> {hero?.secondaryCta || 'Fachkräfte finden'}
              </NavLink>
            </div>

            <div className="hero__stats reveal reveal-delay-4">
              {(hero?.stats || [
                { number: '100+', label: 'Vermittlungen' },
                { number: 'Global', label: 'Einsatzgebiete' },
                { number: '3', label: 'Kernleistungen' }
              ]).map((stat, i) => (
                <div key={i} className="hero__stat">
                  <span className="hero__stat-number">{stat.number}</span>
                  <span className="hero__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – image */}
          <div className="hero__image-wrap reveal--right">
            <div className="hero__image-frame">
              <img 
                src={hero?.heroImage ? urlFor(hero.heroImage).url() : IMAGES.hero} 
                alt="Medizinisches Fachpersonal" 
                className="hero__image" 
              />

              {/* Floating Pill 1: Top Left */}
              <div className="hero__float-pill hero__float-pill--top card">
                <HeartPulse size={16} color="var(--green-500)" />
                <span>{hero?.floatPillTop || 'Zertifizierte Fachkräfte'}</span>
              </div>

              {/* Floating Card: Bottom Left */}
              <div className="hero__float-card card">
                <div className="hero__float-icon">
                  <Stethoscope size={20} color="var(--green-500)" />
                </div>
                <div className="hero__float-text">
                  <span className="hero__float-title">{hero?.floatCard || 'Orthopädie'}</span>
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
                <span>{hero?.floatPillRight || 'Internationale Expertise'}</span>
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
              <img 
                src={homeData?.aboutStrip?.image ? urlFor(homeData.aboutStrip.image).url() : IMAGES.about} 
                alt="Modernes Krankenhaus" 
                className="about-strip__img" 
              />
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
            <div className="section-label">{homeData?.aboutStrip?.subtitle || 'Das ist Nexusbridge'}</div>
            <h2 className="display-3">
              {homeData?.aboutStrip?.title || 'Ihr Partner im Gesundheitssektor'}
            </h2>
            <div className="accent-line" />
            <p className="body-lg about-strip__body">
              {homeData?.aboutStrip?.text || 'Nexusbridge verbindet medizinische Fachkräfte mit Gesundheitsorganisationen – national und international.'}
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
            <div className="section-label">{homeData?.servicesLabel || 'Unsere Bereiche'}</div>
            <h2 className="display-2">{homeData?.servicesTitle || 'Was wir für Sie tun'}</h2>
          </div>

          <div className="bereiche__grid">
            {displayServices.map((service, i) => (
              <div key={service._id || i} className={`bereiche__card card reveal reveal-delay-${i + 1}`}>
                <div className="bereiche__card-icon-wrap">
                  {iconMap[service.iconName] || <Building2 size={24} color="var(--green-500)" />}
                </div>
                <h3 className="heading-1 bereiche__card-title">{service.title}</h3>
                <p className="body-sm bereiche__card-body">{service.description}</p>
                <NavLink to={service.link || '/kontakt'} className="bereiche__card-link">
                  Mehr erfahren <ArrowRight size={14} />
                </NavLink>
              </div>
            ))}
            
            {/* Fallback if no services in Sanity yet */}
            {displayServices.length === 0 && (
              <p className="body-sm">Lade Leistungen...</p>
            )}
          </div>
        </div>
      </section>

      {/* ─────────────── PRÄVENTIONSMEDIZIN ─────────────── */}
      <section className="prevention section">
        <div className="container prevention__inner">
          <div className="prevention__text reveal--left">
            <div className="section-label">Präventionsmedizin</div>
            <h2 className="display-3">
              {homeData?.prevention?.title || 'Gesundheit im Unternehmen —'}{' '}
              <span className="text-accent">{homeData?.prevention?.subtitle || 'aktiv schützen'}</span>
            </h2>
            <div className="accent-line" />
            <p className="body-lg prevention__body">
              {homeData?.prevention?.description || 'Wir entsenden qualifizierte Ärzte direkt zu Ihrem Unternehmen. Durch regelmäßige Vorsorgeuntersuchungen Ihrer Mitarbeitenden senken Sie krankheitsbedingte Ausfälle nachhaltig — und zeigen echte Fürsorge für Ihr Team.'}
            </p>
            <ul className="prevention__list">
              {(homeData?.prevention?.points || PREVENTION_POINTS).map((item, i) => (
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
              <img 
                src={homeData?.prevention?.image ? urlFor(homeData.prevention.image).url() : IMAGES.prevention} 
                alt="Betriebliche Gesundheitsvorsorge" 
                className="prevention__img" 
              />
            </div>
            <div className="prevention__stat card">
              <Activity size={22} color="var(--green-600)" />
              <div>
                <p className="prevention__stat-num">{homeData?.prevention?.statNumber || '−30%'}</p>
                <p className="prevention__stat-sub">{homeData?.prevention?.statLabel || 'weniger Krankheitsausfälle'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── PROCESS ─────────────── */}
      <section className="process section">
        <div className="container">
          <div className="process__header reveal">
            <div className="section-label">{homeData?.processLabel || 'So arbeiten wir zusammen'}</div>
            <h2 className="display-2">
              {(() => {
                const title = homeData?.processTitle || 'In drei Schritten zum Ziel'
                // Optional: you can extract an accent word from homeData as well if desired,
                // but for now let's just make the whole thing the title. 
                // Or if it contains 'zum Ziel', we can highlight it:
                if (title.includes('zum Ziel')) {
                  const parts = title.split('zum Ziel')
                  return <>{parts[0]}<span className="text-accent">zum Ziel</span>{parts[1]}</>
                }
                return title
              })()}
            </h2>
          </div>

          <div className="process__steps">
            {displaySteps.map((s, i) => (
              <div key={s._id || i} className={`process__step card reveal reveal-delay-${i + 1}`}>
                <div className="process__step-icon-wrap">
                  {iconMap[s.iconName] || <ClipboardCheck size={24} color="var(--green-500)" />}
                </div>
                <h3 className="heading-1 process__step-title">{s.title}</h3>
                <p className="body-sm process__step-body">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── TEAM ─────────────── */}
      <section className="team-section section">
        <div className="container">
          <div className="team-section__header reveal">
            <div className="section-label">{homeData?.teamLabel || 'Unser Team'}</div>
            <h2 className="display-2">
              {(() => {
                const title = homeData?.teamTitle || 'Die Menschen hinter Nexusbridge'
                if (title.includes('Nexusbridge')) {
                  const parts = title.split('Nexusbridge')
                  return <>{parts[0]}<span className="text-accent">Nexusbridge</span>{parts[1]}</>
                }
                return title
              })()}
            </h2>
          </div>
          <div className="team-section__grid">
            {displayTeam.map((member, i) => (
              <div key={member._id || i} className={`team-card reveal reveal-delay-${i + 1}`}>
                <div className="team-card__photo-wrap">
                  <img 
                    src={(() => {
                      if (member.photo) return urlFor(member.photo).width(400).height(500).url();
                      if (member.photoLocal) return member.photoLocal;
                      
                      // Local fallback mapping by name
                      const name = member.name?.toLowerCase() || '';
                      if (name.includes('louis')) return '/nexus-bridge/images/Louis Alwani.jpeg';
                      if (name.includes('sabine')) return '/nexus-bridge/images/Sabine Weigand.jpeg';
                      if (name.includes('nada')) return '/nexus-bridge/images/nada alwani.jpeg';
                      if (name.includes('wolfgang')) return '/nexus-bridge/images/Wolfgang.jpeg';
                      if (name.includes('tim')) return '/nexus-bridge/images/tim.jpeg';
                      
                      return 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop';
                    })()} 
                    alt={member.name} 
                    className="team-card__photo" 
                  />
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
              <div className="section-label" style={{ background: 'var(--white)', color: 'var(--green-700)', boxShadow: 'var(--shadow-sm)' }}>
                {homeData?.cta?.label || 'Bereit loszulegen?'}
              </div>
              <h2 className="display-3" style={{ color: 'var(--white)' }}>
                {homeData?.cta?.title || 'Finden Sie genau das, was Sie suchen.'}
              </h2>
            </div>
            <div className="cta-strip__actions">
              <NavLink to="/kontakt" className="btn btn--outline" style={{ background: 'var(--white)', border: 'none', boxShadow: 'var(--shadow-sm)' }}>
                {homeData?.cta?.buttonText || 'Jetzt Kontakt aufnehmen'}
              </NavLink>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

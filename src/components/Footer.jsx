import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { client, urlFor } from '../lib/sanity'
import { Phone, Mail, MapPin } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const [settings, setSettings] = useState(null)
  const [navData, setNavData] = useState(null)

  useEffect(() => {
    client.fetch('*[_type == "siteSettings"][0]').then(setSettings)
    client.fetch('*[_type == "navigation"][0]').then(setNavData)
  }, [])

  const logoUrl = settings?.logo ? urlFor(settings.logo).url() : null

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <NavLink to="/">
              <img src={logoUrl || "images/image-160x109.png"} alt="Nexusbridge Medical Logo" className="footer__logo" />
            </NavLink>
            <p className="footer__tagline">
              {settings?.footerText || 'Medizinische Fachkräfte weltweit verfügbar machen.'}
            </p>
            {settings?.socialLinks?.length > 0 && (
              <div className="footer__socials">
                {settings.socialLinks.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="footer__social-link">
                    {link.platform}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="footer__nav">
            <div className="footer__col">
              <h4 className="footer__col-title">Navigation</h4>
              <ul>
                {(navData?.mainNav || [
                  { to: '/', label: 'Home' },
                  { to: '/fachkraefte-finden', label: 'Fachkräfte finden' },
                  { to: '/flexibel-arbeiten', label: 'Flexibel arbeiten' },
                  { to: '/ueber-uns', label: 'Über uns' },
                  { to: '/kontakt', label: 'Kontakt' },
                ]).map((link, i) => (
                  <li key={i}><NavLink to={link.to}>{link.label}</NavLink></li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Kontakt</h4>
              <ul>
                <li>
                  <a href={`tel:${settings?.phone}`} className="footer__contact-link">
                    <Phone size={14} /> {settings?.phone || '+49 721 89319042'}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${settings?.email}`} className="footer__contact-link">
                    <Mail size={14} /> {settings?.email || 'info@nexus-bridge.de'}
                  </a>
                </li>
                <li className="footer__address">
                  <MapPin size={14} style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{settings?.address || 'Morgenstraße 6, 76137 Karlsruhe'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} {settings?.siteName || 'Nexus-Bridge GbR'}. Alle Rechte vorbehalten.
          </p>
          <div className="footer__legal">
            {(navData?.legalNav || [
              { to: '/impressum', label: 'Impressum' },
              { to: '/datenschutz', label: 'Datenschutzerklärung' },
              { to: '/kontakt', label: 'Kontakt' }
            ]).map((link, i) => (
              <NavLink key={i} to={link.to}>{link.label}</NavLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

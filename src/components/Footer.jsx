import { NavLink } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <NavLink to="/">
              <img src="/logo.png" alt="Nexusbridge Medical Logo" className="footer__logo" />
            </NavLink>
            <p className="footer__tagline">
              Medizinische Fachkräfte weltweit verfügbar machen.
            </p>
          </div>

          <div className="footer__nav">
            <div className="footer__col">
              <h4 className="footer__col-title">Navigation</h4>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/fachkraefte-finden">Fachkräfte finden</NavLink></li>
                <li><NavLink to="/flexibel-arbeiten">Flexibel arbeiten</NavLink></li>
                <li><NavLink to="/ueber-uns">Über uns</NavLink></li>
                <li><NavLink to="/kontakt">Kontakt</NavLink></li>
              </ul>
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Kontakt</h4>
              <ul>
                <li>
                  <a href="tel:+4972189319042" className="footer__contact-link">
                    <Phone size={14} /> +49 721 89319042
                  </a>
                </li>
                <li>
                  <a href="mailto:info@nexus-bridge.de" className="footer__contact-link">
                    <Mail size={14} /> info@nexus-bridge.de
                  </a>
                </li>
                <li className="footer__address">
                  <MapPin size={14} style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>Morgenstraße 6<br />76137 Karlsruhe</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} Nexus-Bridge GbR. Alle Rechte vorbehalten.
          </p>
          <div className="footer__legal">
            <NavLink to="/impressum">Impressum</NavLink>
            <NavLink to="/datenschutz">Datenschutzerklärung</NavLink>
            <NavLink to="/kontakt">Kontakt</NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

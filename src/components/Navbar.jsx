import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = 'auto'
  }, [location])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    document.body.style.overflow = !menuOpen ? 'hidden' : 'auto'
  }

  const links = [
    { to: '/', label: 'Home' },
    { to: '/fachkraefte-finden', label: 'Fachkräfte finden' },
    { to: '/flexibel-arbeiten', label: 'Flexibel arbeiten' },
    { to: '/ueber-uns', label: 'Über uns' },
    { to: '/kontakt', label: 'Kontakt' },
  ]

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          
          <NavLink to="/" className="navbar__brand">
            <img src="images/image-160x109.png" alt="Nexusbridge Medical Logo" className="navbar__logo" />
          </NavLink>

          <div className="navbar__desktop">
            <ul className="navbar__links">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="navbar__actions">
              <NavLink to="/kontakt" className="btn btn--primary">
                Jetzt kontaktieren
              </NavLink>
            </div>
          </div>

          <button className="navbar__mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <X size={28} color="var(--green-900)" /> : <Menu size={28} color="var(--green-900)" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__inner">
          <ul className="mobile-menu__links">
            {links.map((link, i) => (
              <li key={link.to} style={{ animationDelay: `${i * 0.1}s` }}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mobile-menu__footer">
            <NavLink to="/kontakt" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
              Jetzt kontaktieren
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

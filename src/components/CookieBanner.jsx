import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { readCookieConsent, writeCookieConsent, DEFAULT_CONSENT } from '../lib/cookieConsent'
import './CookieBanner.css'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [hasConsent, setHasConsent] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [cookieSettings, setCookieSettings] = useState(null)
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    import('../lib/sanity').then(({ client }) => {
      client.fetch('*[_type == "siteSettings"][0]').then(res => {
        if (res?.cookieConsent) setCookieSettings(res.cookieConsent)
      })
    })

    const consent = readCookieConsent()
    if (!consent) {
      setTimeout(() => setVisible(true), 1000)
      return
    }
    setHasConsent(true)
    setPreferences({
      analytics: Boolean(consent.analytics),
      marketing: Boolean(consent.marketing),
    })
  }, [])

  const acceptAll = () => {
    writeCookieConsent({
      ...DEFAULT_CONSENT,
      analytics: true,
      marketing: true,
      status: 'accepted',
    })
    setHasConsent(true)
    setVisible(false)
  }

  const rejectOptional = () => {
    writeCookieConsent({
      ...DEFAULT_CONSENT,
      analytics: false,
      marketing: false,
      status: 'rejected',
    })
    setHasConsent(true)
    setVisible(false)
  }

  const savePreferences = () => {
    writeCookieConsent({
      ...DEFAULT_CONSENT,
      analytics: preferences.analytics,
      marketing: preferences.marketing,
      status: 'custom',
    })
    setHasConsent(true)
    setVisible(false)
  }

  const title = cookieSettings?.title || 'Cookie-Einstellungen'
  const description = cookieSettings?.description || 'Wir verwenden notwendige Cookies, damit die Website funktioniert. Mit Ihrer Zustimmung nutzen wir optional auch Analyse- und Marketing-Cookies, um unsere Inhalte und Services zu verbessern.'
  const necessaryDescription = cookieSettings?.necessaryDescription || 'Erforderlich für grundlegende Funktionen der Website und nicht deaktivierbar.'
  const analyticsDescription = cookieSettings?.analyticsDescription || 'Hilft uns zu verstehen, wie Besucher die Website nutzen, damit wir sie verbessern koennen.'
  const marketingDescription = cookieSettings?.marketingDescription || 'Wird genutzt, um Inhalte und Kampagnen relevanter auszuspielen.'
  const policyLinkLabel = cookieSettings?.policyLinkLabel || 'Datenschutzerklaerung'

  return (
    <>
      {visible && (
        <div className="cookie-banner">
          <div className="container cookie-banner__inner">
            <div className="cookie-banner__content">
              <h3 className="cookie-banner__title">{title}</h3>
              <p className="body-sm cookie-banner__text">
                {description}{' '}
                <Link className="cookie-banner__policy-link" to="/datenschutz">
                  {policyLinkLabel}
                </Link>
              </p>

              {showPreferences && (
                <div className="cookie-banner__preferences">
                  <label className="cookie-toggle">
                    <div>
                      <span className="cookie-toggle__label">Notwendige Cookies</span>
                      <p className="cookie-toggle__text">{necessaryDescription}</p>
                    </div>
                    <input type="checkbox" checked disabled />
                  </label>

                  <label className="cookie-toggle">
                    <div>
                      <span className="cookie-toggle__label">Analyse-Cookies</span>
                      <p className="cookie-toggle__text">{analyticsDescription}</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences((prev) => ({ ...prev, analytics: e.target.checked }))
                      }
                    />
                  </label>

                  <label className="cookie-toggle">
                    <div>
                      <span className="cookie-toggle__label">Marketing-Cookies</span>
                      <p className="cookie-toggle__text">{marketingDescription}</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences((prev) => ({ ...prev, marketing: e.target.checked }))
                      }
                    />
                  </label>
                </div>
              )}
            </div>

            <div className="cookie-banner__actions">
              {!showPreferences && (
                <button className="btn btn--outline btn--sm" onClick={() => setShowPreferences(true)}>
                  Einstellungen
                </button>
              )}
              <button className="btn btn--outline btn--sm" onClick={rejectOptional}>
                Nur notwendige
              </button>
              {showPreferences ? (
                <button className="btn btn--primary btn--sm" onClick={savePreferences}>
                  Auswahl speichern
                </button>
              ) : (
                <button className="btn btn--primary btn--sm" onClick={acceptAll}>
                  Alle akzeptieren
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {hasConsent && !visible && (
        <button
          className="cookie-manage-button"
          onClick={() => {
            const currentConsent = readCookieConsent()
            setPreferences({
              analytics: Boolean(currentConsent?.analytics),
              marketing: Boolean(currentConsent?.marketing),
            })
            setShowPreferences(true)
            setVisible(true)
          }}
        >
          Cookie-Einstellungen
        </button>
      )}
    </>
  )
}

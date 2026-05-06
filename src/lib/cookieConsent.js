const STORAGE_KEY = 'nb-cookie-consent-v1'

export const DEFAULT_CONSENT = {
  necessary: true,
  analytics: false,
  marketing: false,
  status: 'rejected',
  updatedAt: null,
}

export function readCookieConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    return {
      ...DEFAULT_CONSENT,
      ...parsed,
      necessary: true,
    }
  } catch {
    return null
  }
}

export function writeCookieConsent(consent) {
  const normalized = {
    ...DEFAULT_CONSENT,
    ...consent,
    necessary: true,
    updatedAt: new Date().toISOString(),
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized))
  window.dispatchEvent(new CustomEvent('nb-cookie-consent-updated', { detail: normalized }))
}

export function clearCookieConsent() {
  localStorage.removeItem(STORAGE_KEY)
  window.dispatchEvent(new CustomEvent('nb-cookie-consent-updated', { detail: null }))
}

export function canUseAnalytics() {
  return Boolean(readCookieConsent()?.analytics)
}

export function canUseMarketing() {
  return Boolean(readCookieConsent()?.marketing)
}


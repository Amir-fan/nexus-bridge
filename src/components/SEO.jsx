import { useEffect } from 'react'

export default function SEO({ title, description, siteSettings }) {
  useEffect(() => {
    const finalTitle = title || siteSettings?.seoTitle || siteSettings?.siteName || 'Nexusbridge Medical'
    const finalDescription = description || siteSettings?.seoDescription || 'Nexusbridge Medical - Ihr Partner für medizinische Fachkräfte.'

    document.title = finalTitle
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', finalDescription)
  }, [title, description, siteSettings])

  return null
}

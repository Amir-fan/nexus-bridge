import { useState, useEffect } from 'react'
import { PortableText } from '@portabletext/react'
import { client } from '../lib/sanity'
import SEO from '../components/SEO'
import './Legal.css'

export default function Privacy() {
  const [pageData, setPageData] = useState(null)
  const [settings, setSettings] = useState(null)

  useEffect(() => {
    client
      .fetch('*[_type == "legalPage" && (slug.current == "datenschutz" || pageType == "datenschutz" || _id == "legal-datenschutz")][0]')
      .then(setPageData)
    client.fetch('*[_type == "siteSettings"][0]').then(setSettings)
  }, [])

  if (!pageData) return <div className="legal-page" style={{ minHeight: '50vh' }} />

  return (
    <div className="legal-page">
      <SEO title={pageData.seoTitle || pageData.title} description={pageData.seoDescription} siteSettings={settings} />
      <div className="container container--narrow">
        <div className="legal-content reveal">
          <h1 className="display-3">{pageData.title}</h1>
          {pageData.content && <PortableText value={pageData.content} />}
        </div>
      </div>
    </div>
  )
}

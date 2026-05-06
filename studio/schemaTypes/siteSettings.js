export default {
  name: 'siteSettings',
  title: 'Globale Einstellungen',
  type: 'document',
  fields: [
    { name: 'siteName', title: 'Website Name', type: 'string' },
    { name: 'logo', title: 'Website Logo', type: 'image' },
    { name: 'email', title: 'Kontakt Email', type: 'string' },
    { name: 'phone', title: 'Telefonnummer', type: 'string' },
    { name: 'address', title: 'Adresse', type: 'text' },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Plattform', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
          ],
        },
      ],
    },
    { name: 'footerText', title: 'Footer Text', type: 'text' },
    { name: 'cookieBanner', title: 'Cookie Banner Text (Legacy)', type: 'text', description: 'Legacy Feld, wird durch Cookie Consent Einstellungen ersetzt.' },
    {
      name: 'cookieConsent',
      title: 'Cookie Consent Banner',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        { name: 'title', title: 'Titel', type: 'string' },
        { name: 'description', title: 'Beschreibung', type: 'text', rows: 3 },
        { name: 'necessaryDescription', title: 'Text notwendige Cookies', type: 'text', rows: 2 },
        { name: 'analyticsDescription', title: 'Text Analyse-Cookies', type: 'text', rows: 2 },
        { name: 'marketingDescription', title: 'Text Marketing-Cookies', type: 'text', rows: 2 },
        { name: 'policyLinkLabel', title: 'Label Datenschutz-Link', type: 'string' },
      ],
    },
    { name: 'seoTitle', title: 'Standard SEO Titel', type: 'string', description: 'Wird verwendet, wenn eine Seite keinen eigenen Titel hat.' },
    { name: 'seoDescription', title: 'Standard SEO Beschreibung', type: 'text' },
  ],
}

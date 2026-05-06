import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'nexus bridge',

  projectId: 'h5tlbbbb',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Inhalt')
          .items([
            S.listItem()
              .title('Team')
              .child(S.documentTypeList('team').title('Team Mitglieder')),
            S.divider(),
            S.listItem()
              .title('Seiten-Inhalte')
              .child(
                S.list()
                  .title('Inhalte')
                  .items([
                    S.listItem()
                      .title('Startseite Hero')
                      .child(S.documentTypeList('hero').title('Hero Abschnitte')),
                    S.listItem()
                      .title('Seite: Startseite (Zusatz)')
                      .child(S.documentTypeList('homePage').title('Home Zusatz')),
                    S.listItem()
                      .title('Seite: Fachkräfte (Karriere)')
                      .child(S.documentTypeList('candidatePage').title('Karriere Seite')),
                    S.listItem()
                      .title('Seite: Kliniken (Personal finden)')
                      .child(S.documentTypeList('employerPage').title('Arbeitgeber Seite')),
                    S.listItem()
                      .title('Seite: Über uns')
                      .child(S.documentTypeList('aboutPage').title('Über uns Seite')),
                    S.listItem()
                      .title('Leistungen (Home)')
                      .child(S.documentTypeList('service').title('Leistungen')),
                    S.listItem()
                      .title('Prozess Schritte')
                      .child(S.documentTypeList('processStep').title('Schritte')),
                    S.listItem()
                      .title('Seite: Kontakt')
                      .child(S.documentTypeList('contactPage').title('Kontakt Seite')),
                    S.listItem()
                      .title('Rechtliche Seiten')
                      .child(
                        S.list()
                          .title('Impressum & Datenschutz')
                          .items([
                            S.listItem()
                              .title('Impressum')
                              .child(
                                S.document()
                                  .schemaType('legalPage')
                                  .documentId('legal-impressum')
                                  .initialValueTemplate('legal-impressum-template')
                              ),
                            S.listItem()
                              .title('Datenschutz')
                              .child(
                                S.document()
                                  .schemaType('legalPage')
                                  .documentId('legal-datenschutz')
                                  .initialValueTemplate('legal-datenschutz-template')
                              ),
                          ])
                      ),
                  ])
              ),
            S.divider(),
            S.listItem()
              .title('Einstellungen')
              .child(
                S.list()
                  .title('Einstellungen')
                  .items([
                    S.listItem()
                      .title('Globale Einstellungen')
                      .child(S.documentTypeList('siteSettings').title('Site Settings')),
                    S.listItem()
                      .title('Navigation')
                      .child(S.documentTypeList('navigation').title('Menüs')),
                  ])
              ),
            ...S.documentTypeListItems().filter(
              (listItem) => !['team', 'hero', 'service', 'processStep', 'candidatePage', 'employerPage', 'siteSettings', 'aboutPage', 'homePage', 'contactPage', 'legalPage', 'navigation'].includes(listItem.getId())
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => templateItem.templateId !== 'legalPage')
      }
      return prev
    },
  },
  templates: (prev) => [
    ...prev,
    {
      id: 'legal-impressum-template',
      title: 'Impressum',
      schemaType: 'legalPage',
      value: {
        pageType: 'impressum',
        title: 'Impressum',
        slug: { current: 'impressum' },
      },
    },
    {
      id: 'legal-datenschutz-template',
      title: 'Datenschutz',
      schemaType: 'legalPage',
      value: {
        pageType: 'datenschutz',
        title: 'Datenschutzerklaerung',
        slug: { current: 'datenschutz' },
      },
    },
  ],
})

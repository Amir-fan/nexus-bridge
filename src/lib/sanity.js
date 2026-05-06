import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'h5tlbbbb',
  dataset: 'production',
  useCdn: false,          // ← false = always fresh, no caching delay
  apiVersion: '2024-05-04',
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

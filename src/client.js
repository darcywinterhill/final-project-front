import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '0s5n9re3',
  dataset: 'production',
  useCdn: true
})
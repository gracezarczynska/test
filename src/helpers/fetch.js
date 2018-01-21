import 'isomorphic-fetch'

export const fetchAndCatch = (request) => fetch(request).catch((err) => {
  throw new Error('Failed to fetch')
})

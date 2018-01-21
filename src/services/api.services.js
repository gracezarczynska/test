import { createApiRequestUrl } from '../helpers/url'
import { fetchAndCatch } from '../helpers/fetch'

export const fetchResults = (query) => (
  fetchAndCatch(
    createApiRequestUrl({
      query,
      host: 'help-search-api-prod.herokuapp.com/search'
    }),
  )
)

/**
 * Create the full queried URL for the search
 *
 * @param {String} query
 * @param {String} host
 *
 * @return {String} request url
 */
export const createApiRequestUrl = ({ query, host }) => {
  return [
    'https://',
    host,
    '?query=',
    query
  ].join('')
}

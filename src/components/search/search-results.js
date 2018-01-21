import React from 'react'
import { SearchResult } from './search-result'
import PropTypes from 'prop-types'

export const SearchResults = ({ results }) => (
  <div className="search-results">
    {results.map((result, index) => {
      return <SearchResult key={(`result.${index}`)} {...result} />
    })}
  </div>
)

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
}

SearchResults.defaultProps = {
  results: [],
}

export default SearchResults

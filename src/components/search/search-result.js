import React from 'react'
import PropTypes from 'prop-types'

export const SearchResult = ({ title, ulr, description }) => (
  <div className="col-sm-4 search-result">
    <a className="search-result-link" href="{url}">
      <h2>{title}</h2>
      <p>{description}</p>
    </a>
  </div>
)

SearchResult.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

SearchResult.defaultProps = {
  title: '',
  url: '',
  description: '',
}

export default SearchResult

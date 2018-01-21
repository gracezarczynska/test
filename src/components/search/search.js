import React, { Component } from 'react'
import { fetchResults } from '../../services/api.services'
import { SearchResults } from './search-results'

export class Search extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      result: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getResults = this.getResults.bind(this)
  }

  componentWillUpdate() {
    const { region } = this.props
    //TODO filter elements using the region
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    if(this.state.value !== '') {
      this.getResults(this.state.value)
    } else {
      console.log('No search query entered')
    }
  }

  getResults(query) {
    fetchResults(query)
      .then(result => result.json())
      .then(result => this.setState({result: result}))
  }

  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <input className="form-control form-control-large" type="text" value={this.state.value} onChange={this.handleChange} />
          <input className="btn btn-info" type="submit" value="Submit" />
        </form>
        <SearchResults {...this.state.result} />
      </div>
    );
  }
}

export default Search

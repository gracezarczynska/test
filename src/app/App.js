import React, { Component } from 'react'
import './App.css'
import { pathOr, head } from 'ramda'
import { Search } from '../components/search/search'
import CountryChoice from '../components/country-choice/country-choice'

class App extends Component {

  constructor() {
    super()
    this.state = {
      region: 'uk'
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.handleChange(pathOr(false, ['uk'])(head(nextProps.region)))()
  }

  handleChange(event) {
    this.setState({region: event.target.id})
  }

  componentWillMount() {
    // this will run before your component is mounted
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">help-tech-test</h1>
        </header>
        <p className="App-intro">
        </p>
        <CountryChoice region={this.state.region} handleChange={this.handleChange} />
        <Search region={this.state.region} />
      </div>
    );
  }
}

export default App

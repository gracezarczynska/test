import React from 'react'

const CountryChoice = ({ region, handleChange }) => (
  <div className="btn-group btn-group-toggle" data-toggle="buttons">
    <label className={`btn btn-secondary ${region === 'uk' ? 'active' : ''}`}>
      <input type="radio" name="options" id="uk" autoComplete="off" checked={region === 'uk'} onChange={handleChange} /> UK
    </label>
    <label className={`btn btn-secondary ${region === 'roi' ? 'active' : ''}`}>
      <input type="radio" name="options" id="roi" autoComplete="off" checked={region === 'roi'} onChange={handleChange} /> ROI
    </label>
  </div>
)

export default CountryChoice

import React, { Component } from 'react';
import './rating.css'

const range = (min, max) =>
  Array(max - min + 1).fill().map((_, i) => min + i)

const RatingItem  = ({ checked, colored, onChange, value }) => (
  <label className={`rating__item ${colored ? 'rating__item--selected' : ''}`}>
    <input
      checked={checked}
      className='rating__input'
      onChange={(e) => onChange(value)}
      type="radio"
      value={value}
    />
  </label>
)

const Rating = ({ min, max, onChange, value }) => {
  return (
    <div className='rating'>
      {
        range(min, max).map((item,index) => (
          <RatingItem
            key={index}
            colored={value >= item}
            checked={value === item}
            value={item}
            onChange={onChange}
          />
        ))
      }
    </div>
  )
}

class RatingComponent extends Component {
  constructor () {
    super()

    this.state = { rating: 0 }
  }

  render () {
    return (
      <Rating
        min={1}
        max={5}
        onChange={(rating) => this.setState({ rating })}
        value={this.state.rating}
      />
    )
  }
}

export default RatingComponent;

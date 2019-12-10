import React, { Component } from 'react';
import './rating.css';

const range = (min, max) =>
  Array(max - min + 1).fill().map((_, i) => min + i)

const RatingItem  = ({ checked, colored, onChange, value }) => (
  <label className={`rating__item ${colored ? 'rating__item--selected' : ''}`}>
    <input
      checked={checked}
      className='rating__input'
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

class TotalRating extends Component {
  constructor (props) {
    super(props)
    this.state = { rating: this.props.value }
    console.log(this.props.value)
  }

  render () {
    return (
      <Rating
        min={1}
        max={5}
        value={Math.ceil(this.props.value)}
      />
    )
  }
}

export default TotalRating;

import React, { Component } from 'react';
import './total_rating.css';

const range = (min, max) =>Array(max - min + 1).fill().map((_, i) => min + i)
const RatingItem  = ({ checked, colored, value }) => (
  <label className={`rating_item ${colored ? 'rating_item--selected' : ''}`}>
    <input
      checked={checked}
      className='rating_input'
      type="radio"
      value={value}
      readOnly
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

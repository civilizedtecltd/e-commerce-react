import React, { Component } from 'react';
import './rating.css';

const range = (min, max) =>
  Array(max - min + 1).fill().map((_, i) => min + i)

const RatingItem  = ({ checked, colored, onChange, value }) => (
  <label className={`rating__item ${colored ? 'rating__item--selected' : ''}`}>
    <input
      id={"rating"}
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
  constructor (props) {
    super(props)
    this.state = { 
      rating: this.props.rating,
      resetRating : this.props.resetRating
     }
  }

  render () {
    return (
      <Rating
        min={1}
        max={5}
        onChange={(rating) => {
            this.setState({ rating })
            this.props.callback(rating)
        }}
        value={ this.state.rating ? this.state.rating  : this.state.resetRating }
      />
    )
  }
}

export default RatingComponent;

import React, { Component } from 'react';
import './rating.css';

class RatingComponent extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      rating: this.props.rating,
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
        value={ (this.state.rating === true) ? 0 : this.state.rating }
      />
    )
  }
}


const range = (min, max) =>Array(max - min + 1).fill().map((_, i) => min + i)


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



const RatingItem  = ({ checked, colored, onChange, value }) => {
  return(
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
}





export default RatingComponent;

import React, { Component } from 'react';
import axios from 'axios'
import {URL} from '../../constants/config'
import './PriceRange.css';
import {connect} from 'react-redux'

class PriceRanger extends Component{
    constructor(props){
        super(props)
      
        this.state = {
            maxValue: props.filter.maxPrice,
            minValue: props.filter.minPrice,
            step: 1,
            minimumPrice: null,
            maximumPrice: null 
        };

        this.handleChange = this.handleChange.bind(this);
        props.callback.bind(this)
    }


     componentWillMount(){
        this.setState({
            minimumPrice: this.state.minValue,
            maximumPrice: this.state.maxValue
        });

    } 

    handleChange(name, event){
        let value = event.target.value;
        if(name === "second"){
            if(parseInt(this.state.minimumPrice) < parseInt(value)){
                this.setState({maximumPrice:value});
                this.props.callback(Number(this.state.minimumPrice), Number(this.state.maximumPrice))
            }
        }
        else{
            if(parseInt(value) < parseInt(this.state.maximumPrice)){
                this.setState({minimumPrice: value});
                this.props.callback(Number(this.state.minimumPrice),Number(this.state.maximumPrice))
            }
        }
    }

    render(){
        return (
            <div>
                <section className="range-slider">
                    <div className="multi-range">
                        <input type="range"
                               value={this.state.minimumPrice}
                               min={this.state.minValue}
                               max={this.state.maxValue}
                               step={this.state.step}
                               onChange={this.handleChange.bind(this, "first")

                               }/>


                        <input type="range"
                               value={this.state.maximumPrice}
                               min={this.state.minValue}
                               max={this.state.maxValue}
                               step={this.state.step}
                               onChange={this.handleChange.bind(this, "second")}/>
                    </div>


                    <div className="price-reanger-fields">
                        <input type="text" value = {this.state.minimumPrice} readOnly />
                        <span>-</span>
                        <input type="text" value = {this.state.maximumPrice} readOnly />
                    </div>

                </section>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        filter : state.filter.priceFilter
    }
}

export default connect(mapStateToProps,null)(PriceRanger);

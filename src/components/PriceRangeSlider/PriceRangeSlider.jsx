import React, { Component } from 'react';
import './index.css';
class PriceRanger extends Component{
    constructor(props){
        super(props);
      
        this.state = {
            minValue: 10,
            maxValue: 100000,
            step: 10,
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
                    value={this.state.secondValue} 
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
  
export default PriceRanger;
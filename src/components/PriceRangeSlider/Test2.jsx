import React, { Component } from 'react';
import './index.css';
class PriceRanger extends Component{
    constructor(props){
        super(props);
    
        this.state = {
            minValue: 0,
            maxValue: 100000,
            step: 1000,
            firstValue: null,
            secondValue: null
        };
    
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentWillMount(){
        this.setState({firstValue: this.state.minValue, secondValue: this.state.maxValue});
    }
    
    handleChange(name, event){
        let value = event.target.value;
        if(name === "second"){
                if(parseInt(this.state.firstValue) < parseInt(value)){
                this.setState({secondValue:value});
            }
        }
        else{
                if(parseInt(value) < parseInt(this.state.secondValue)){
                this.setState({firstValue: value});
            }
        }
    }
    
    render(){
        const language = this.props.language;
    
        return (
            <div>
                <div className="priceTitle">{"Item found:"+15}</div>
                <div className="rangeValues">Range : {this.state.firstValue} - {this.state.secondValue}</div>
    
                <section className="range-slider">
                    <span className="multi-range">
                    <input type="range"
                    value={this.state.firstValue} 
                    min={this.state.minValue} 
                    max={this.state.maxValue} 
                    step={this.state.step}  
                    onChange={this.handleChange.bind(this, "first")
                    
                    }/>


                    <input type="range" value={this.state.secondValue} min={this.state.minValue} max={this.state.maxValue} step={this.state.step} onChange={this.handleChange.bind(this, "second")}/>
                    </span>

                      
                     <div style={{display:"flex"}}>
                     <input style={{borderRadius:4,border:"1px solid"}} type="number" value={this.state.firstValue}/>
                     <span style={{fontSize:20}}>-</span>
                     <input style={{borderRadius:4,border:"1px solid"}} type="number" value={this.state.secondValue}/>
                     </div>
                     
                </section>
            </div>
        );
    }
    }
  
export default PriceRanger;
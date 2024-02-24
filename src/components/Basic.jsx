import React, { Component } from 'react'

export default class Basic extends Component {
    constructor(props){
        super(props)
        this.state = {counter : 0,toggle : false}
    }

    handleAdd = () => {
        if(this.state.toggle){
         this.setState({
           counter : this.state.counter + 1
         })
        }
        else{
         this.setState({
             counter : this.state.counter
           })
       
        }
       }
     
       handleToggle = () => {
         this.setState({
           toggle : !this.state.toggle
         })
       }
  render() {
    return (
      <div>
      <h1>Basic Components</h1>
      <h3>{this.state.counter}</h3>
      <button onClick={this.handleAdd}>ADD</button>
      <button onClick={this.handleToggle}>TOGGLE</button>
        
      </div>
    )
  }
}

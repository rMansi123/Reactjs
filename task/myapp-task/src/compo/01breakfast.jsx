import React, { Component } from 'react';

class breakfast extends Component {
    constructor()
    {
        super()
        this.state={name:'Tops', price:'Rs. 3000'}
    }
    btnclick1=()=>{
        console.log("btn1 called");
        this.setState({name:"GulabJambun", price:"Rs. 30"})
    }
    btnclick2=()=>{
        console.log("btn2 called");
        this.setState({name:"Tops Technologies", price:"Chetan Patel"})
    }
    btnclick3=()=>{
        console.log("btn3 called");
        this.setState({name:"Tops Technologies", price:"Chetan Patel"})
    }
    render() {
        return (
            <>
             <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h3>{this.state.name}</h3>
                        <h3>{this.state.price}</h3>
                        <button type="button" className="btn btn-success" onClick={this.btnclick1}>Gujrati Dish</button>                       
                    </div>
                    <div className="col-4">
                        <h3>{this.state.name}</h3>
                        <h3>{this.state.price}</h3>
                    <button type="button" className="btn btn-success" onClick={this.btnclick2}>South Indian Dish</button>
                    </div>
                    <div className="col-4">
                        <h3>{this.state.name}</h3>
                        <h3>{this.state.price}</h3>
                    <button type="button" className="btn btn-success" onClick={this.btnclick3}>Chinees Dish</button>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default breakfast;
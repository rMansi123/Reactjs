import React, { Component } from 'react';

class state extends Component {
    constructor()
    {
        super()
        this.state={name:'Tops', author:'Chetan Bhagat', movie:"2 states"}
    }
    btnclick=()=>{
        // console.log("btn called");
        this.setState({name:"Tops Technologies", author:"Chetan Patel"})
    }
    render() {
        return (
            <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{this.state.name}</h1>
                        <h1>{this.state.author}</h1>
                        <button type="button" class="btn btn-primary" onClick={this.btnclick}>Click Me</button> 
                        <h3>{this.state.movie}</h3>
                        <button type="button" class="btn btn-success" onClick={()=>this.setState({movie:'3 idiots'})}>Click Me to change the movie name</button> 
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default state;


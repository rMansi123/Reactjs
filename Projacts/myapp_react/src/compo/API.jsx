import React, { Component } from 'react';

class API extends Component {
    constructor()
    {
        super()
        this.state={status:"pending",fetchData:''}
    }
    componentDidMount(){
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json()).then((Response)=>
            {
                console.log(Response);
                this.setState({status:'Success',fetchData:Response})
            })
        }, 2000);
    }
    render() {
        return (
            <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <h1>{this.state.status}</h1>
                        {this.state.status=='success'?<div>{JSON.stringify(this.state.fetchData)}</div>:"no data found"}

                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default API;
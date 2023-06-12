import React, { Component } from 'react';
import Reuse from './reuse_compo'

class compo extends Component {
    constructor()
    {
        super()
        this.state={Imgsrc:"img/black.jpg"}
    }
    btnclick=()=>{
        // <Reuse />
        console.log("btn called");
        this.setState({imgsrc:"img/blue.jpg"})
    }
    render() {
        return (
            <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-3">
                        <Reuse imgsrc="img/black.jpg" title="Black T-shirt" oldPrice="799" newPrice="699" mybtn={this.btnclick} / >
                    </div>
                    <div className="col-3">
                        <Reuse imgsrc="img/blue.jpg" title="Blue T-shirt" oldPrice="600" newPrice="500"/ >
                    </div>
                    <div className="col-3">
                        <Reuse imgsrc="img/white.jpg" title="White T-shirt" oldPrice="700" newPrice="600"/ >
                    </div>
                    <div className="col-3">
                        <Reuse imgsrc="img/brown.jpg" title="Brown T-shirt" oldPrice="800" newPrice="700"/ >
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default compo;
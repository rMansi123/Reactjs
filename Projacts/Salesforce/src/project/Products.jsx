import React, { Component } from 'react';
import Reuse from './Reuse_products';
import{
    Link,
} from "react-router-dom";

class products extends Component {
        // constructor()
        // {
        //     super()
        //     this.state={Imgsrc:"img/black.jpg"}
        // }
    // btnclick=()=>{
    //     // <Reuse />
    //     console.log("btn called");
        
    //     this.setState({imgsrc:"img/blue.jpg"})
    // }
    render() {
        return (
            <>
            <div className="container-fluid mt-5 product ">
                <div className="row mt-5">
                    {/* <img src="img/productsbg.webp" alt="" /> */}
                    <h2>Learn what Salesforce products can do for you.</h2>
                    <div className="col-3 mt-5">
                        <Reuse imgsrc="img/card1.jpg" title="Small Business" text="Sell smarter and provide support faster in a single app."/ >
                    </div>
                    <div className="col-3 mt-5">
                        <Reuse imgsrc="img/card2.jpg" title="Sales Cloud" text="Close more deals and speed up growth with the #1 CRM."/ >
                    </div>
                    <div className="col-3 mt-5">
                        <Reuse imgsrc="img/card3.jpg" title="Service Cloud" text="Make customers happy faster and build loyalty with Service Cloud."/ >
                    </div>
                    <div className="col-3 mt-5">
                        <Reuse imgsrc="img/card4.jpg" title="Marketing Cloud" text="Build customer relationships for life with data-first digital marketing."/ >
                    </div>
                </div>
                <button type="button" class="btn cardbtn btn-outline-primary mt-5"><Link  to={"/allproducts"} >View all our products</Link></button>
                
                {/* <button type="button" class="btn cardbtn btn-outline-primary mt-5">View all our products</button> */}
                
                
            </div>
            </>
        );
    }
}

export default products;
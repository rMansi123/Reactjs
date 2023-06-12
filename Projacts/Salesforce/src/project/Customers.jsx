import React, { useState } from 'react';
import Customersapi from './API/Customersapi'

function Customers(props) {
    const[api,setapi]=useState(Customersapi)

    return (
        <div className="container-fluid text-center mt-5 text-center customer">
            {/* <img src="img/logobg.webp" alt="" /> */}
                <div className="col-md-8 offset-md-2 p-5">
                    <h1>Over 150,000 companies, both big and small, are growing their business with Salesforce.</h1>
                    <button type="button" class="btn cardbtn btn-outline-primary mt-5">View all customers</button>
                    <div className="row mt-5">
                        {api.map((res)=>{
                            return(
                                // <div class="card">
                                // <div class="card-body">
                                //     <img src={res.image} alt="" />
                                // </div>
                                // </div>
                                <div className="col-3 d-flex">
                                    <div className="shadow p-3 mb-5 bg-white rounded">
                                        <img src={res.image} alt="" /> 
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
        </div>
    );
}

export default Customers;
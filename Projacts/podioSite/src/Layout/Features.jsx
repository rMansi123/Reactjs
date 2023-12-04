import React, { useState } from 'react';
import FeatureAPI from './API/featureAPI'

function Features(props) {
    const[api,setapi]=useState(FeatureAPI)
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row text-center feature">
                    <span>Feature</span>
                    <h2>The components you need, together on one tool</h2>
                    {api.map((res)=>{
                        return(
                            <div className="col-3 p-3 d-flex ">
                                <img src={res.image} alt="" />
                                <span>{res.title}</span>
                            </div>
                        )
                    })}                    
                </div>
            </div>
        </>
    );
}

export default Features;
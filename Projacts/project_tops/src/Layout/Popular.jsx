import React, { useState } from 'react';
import PopularAPI from './API/PopularAPI'

function Popular(props) {
    const[api,setapi]=useState(PopularAPI)
    return (
        <>
            <div className="container">
                <div className="row p-5">
                    {api.map((res)=>{
                        return(
                                <div className="col-4 mt-5">
                                    <div className="card p-3 mycard">
                                        <h3>{res.title}</h3>
                                        <p>{res.info}</p>
                                    </div>
                                </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Popular;
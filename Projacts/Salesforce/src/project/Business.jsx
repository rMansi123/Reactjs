import React, { useState } from 'react';
import BusinessAPI from './API/BusinessAPI'

function Business(props) {
    const[api,setapi]=useState(BusinessAPI)
    return (
        <>
            <div className="container business">
                <div className="row">
                    {api.map((res)=>{
                        return(
                            // <div className="col-3 mt-5 p-3" >
                            //     <img src={res.image} alt="" />
                            //     <a href="" className='text-center'>{res.info}</a>
                            // </div>

                            <div className="col-3 mt-5 p-3">
                                <img src={res.image} alt="" />
                                <div className="row mt-5 text-center">
                                    <a href="" className='text-center'>{res.info}</a>
                                </div>
                            </div>                            
                        )
                    })}
                </div>
            
            </div>        
        </>
    );
}

export default Business;
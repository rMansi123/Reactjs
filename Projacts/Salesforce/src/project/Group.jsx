import React, { useState } from 'react';
import groupAPI from './API/groupAPI'

function Group(props) {
    const[api,setapi]=useState(groupAPI)
    return (
        <>
        <div className="container-fluid text-center mt-5 p-3 group">
            <div className="col-md-8 offset-md-2 p-5">                
                <h3>Our technology helps people create better jobs, lives, companies, and communities.</h3>            
            </div>
             
            <div className="row mt-5">
                
                {api.map((res)=>{
                    return(
                        <div className="col-4">
                            <img src={res.image} alt="" />
                            <div className="row">
                                <p>{res.info}</p>
                            </div>
                        </div>
                    )
                })}

                <div className="container-fluid">
                    <div className="row">
                        <img src="img/Groupbg.webp" alt="" />
                    </div>
                </div>
                
            </div> 
        </div>      
        </>
    );
}

export default Group;
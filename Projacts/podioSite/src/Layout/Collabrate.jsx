import React, { useState } from 'react';
import ColAPI from './API/ColAPI'

function Collabrate(props) {
    const[api,setapi]=useState(ColAPI)
    console.log(api);
    return (
        <>
            <div className="container">
                <div className="collbrate text-center">
                    <span>Faste setup, full control</span>
                    <h2>Tighter collaboration for <br/> greater durability</h2>
                    <p>
                    Clearly defined roles and a custom tool fitted to 
                    how your team works best will <br /> help improve delivery time, 
                    effectiveness and relationships.
                    </p>
                    <div className="row">
                        {api.map((res)=>{
                            console.log(res);
                            return(
                                <div className="col-4 p-5">
                                    <h3>{res.title}</h3>
                                    <img src={res.image} alt="" className='mt-3'/>
                                    <p className='mt-3'>{res.info}</p>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Collabrate;
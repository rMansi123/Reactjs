import React from 'react';
import { useState } from 'react';
import ImageAPI from './API/ImageAPI';

function Imageapi(props){
    const[api,setapi]=useState(ImageAPI)
    console.log(api);
    return(
        <div>
            <div className="container-fluid imageapi">
                <div className="row">
                    {api.map((res)=>{
                        console.log(res.image);
                        return(
                            <div className="col-2 col-sm-12 col-lg-2 text-center mt-3">
                                <img src={res.image} alt="" />
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}



export default Imageapi;
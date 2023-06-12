import React from 'react';
import { useState } from 'react';


function Usestate(props) {
    const[name,setname]=useState("Tops")
    const[author,setauthor]=useState("Chetan Bhagat")

    const btnclick=()=>{
        console.log("callled");
        setname("React Class")
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{name}</h1>
                        <button className='btn btn-primary' onClick={btnclick}>Click</button>
                        <h2>{author}</h2>
                        <button className='btn btn-success' onClick={()=>setauthor("Chetan")}>Click</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Usestate;
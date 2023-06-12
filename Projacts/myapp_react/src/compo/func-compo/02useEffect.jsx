import React, { useEffect, useState } from 'react';

function UseEffect(props) {
    const[vara,setvara]=useState(0)
    const[varb,setvarb]=useState(10)

    const clck=()=>{
        console.log("btn called");
        setvara(10)
        setvarb(20)
    }

    useEffect(()=>{
        setTimeout(() => {
            console.log("use effect called");
        }, 2000);
    })
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>{vara+varb}</h1>
                        <button className='btn btn-primary' onClick={clck}>Click Me</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UseEffect;
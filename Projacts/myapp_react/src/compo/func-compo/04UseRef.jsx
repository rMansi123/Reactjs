import React, { useRef } from 'react';

function UseRef(props) {
    const ref = useRef(0)
    // console.log(data);

    const Btnclick=()=>{
        console.log(ref.current);
        ref.current=ref.current+1
        alert("You have clicked" + ref.current + " Times")
    }
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <button className='btn btn-primary' onClick={Btnclick}>Click Me</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UseRef;
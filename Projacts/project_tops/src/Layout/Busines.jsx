import React from 'react';

function Busines(props) {
    return (
        <>
            <div className="container-fluid business text-center text-white p-3">
                <h3><b>Get started on Podio,</b>for <br /> streamlined work that 
                will drive your <br /> business forward.</h3>
                <div className="d-flex justify-content-center mt-4">
                        <input className='from-control'  type="text" placeholder='Enter your email address' />
                        <button className='btn'>Start Now</button>
                </div>
            </div>
        </>
    );
}

export default Busines;
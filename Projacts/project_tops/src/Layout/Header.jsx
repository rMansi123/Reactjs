import React from 'react';

function Header(props) {
    return (
        <>
        <div className="container-fluid podio">
            <div className="row">
                <div className=" col-md-10 col-lg-5 text-white mt-5 p-5" >
                    <h1 className='display-5'>Get your team working in sync</h1>
                    <p>Build powerful low-code business solutions to customize work and communication</p>
                    <div className="d-flex">
                        <input className='from-control' id='disabledInput' type="text" placeholder='Enter your Work Email' />
                        <button className='btn workbtn'>Start Free</button>
                    </div>
                </div>
            </div>

        </div>
        </>
    );
}

export default Header;
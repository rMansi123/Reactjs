import React from 'react';

function Drive(props) {
    return (
        <div>
            <div className="container-fluid drive">
                <div className="row mt-5" >
                    <div className="col-4 col-sm-12 col-lg-4 p-5">
                        <img src="image/pc.png" alt="pc" className='mt-5' />
                    </div>
                    <div className="col-8 col-md-12 col-lg-8 p-5">
                        <span className='fs-6'>Consolidated data</span>
                        <h2>Drive your project forward, successfully</h2>
                        <p>Podio transforms your project data into one tool to align all content, conversations, 
                            and process into one collaboration point.
                        </p>
                        <button className="btn signupbtn" type="submit">Learn More</button>                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Drive;
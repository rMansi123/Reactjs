import React from 'react';

function Salesforce(props) {
    return (
        <>
            <div className="container salesforce">
            <div class="shadow p-3 mb-5 bg-white rounded">
                <div className="row ">
                    <div className="col-6 p-5 mt-5 ">
                        <h3>Try Salesforce for free. No credit card required, no software to install.</h3>
                        <div className='row mt-5'>
                            <button className='btn btn-primary'>Start free trial</button>
                            <button type="button" class="btn btn-outline-primary mt-3">See pricing</button>
                        </div>
                        
                    </div>
                    <div className="col-6">
                        <img src="img/salesforce.webp" alt="" />
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Salesforce;
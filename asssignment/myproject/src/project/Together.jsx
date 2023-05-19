import React from 'react';

function Together(props) {
    return (
        <>
            <div className="container-fluid text-center mt-5 together">
                <div className="row">
                    <div className="col-md-8 offset-md-2 p-5">
                        <h1>We bring companies and customers together</h1>
                        <p>
                        Salesforce is the world’s most trusted customer relationship management 
                        (CRM) platform. We help your marketing, sales, commerce, service and 
                        IT teams work as one from anywhere — so you can keep your customers happy everywhere.
                        </p>
                        <button className="btn btn-primary" type="submit">Start free trial</button>
                        <button className="btn btn-outline-primary" type="submit">Watch demos</button> 
                    </div>
                </div>
            </div>
        </>
    );
}

export default Together;
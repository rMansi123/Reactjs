import React from 'react';

function Question(props) {
    return (
        <>
            <div className="container question mt-5">
                <div className="shadow p-3 mb-5 bg-white rounded text-center">
                    <div className="row ">
                        <div className="col-md-7 offset-md-3 p-5">
                            <h3>Questions? We’ll put you on the right path.</h3>
                            <p className='mt-4'>
                            Ask about Salesforce products, pricing, implementation, 
                            or anything else. Our highly trained reps are standing by, ready to help.
                            </p>
                            <div className='mt-5'>
                                <button className="btn btn-primary" type="submit">Contact us</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="">Editions & pricing</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Question;
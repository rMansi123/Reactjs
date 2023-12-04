import React, { useState } from 'react';
import Navbar from './Navbar';
import Popular from './Popular';
import ImageAPI from './API/ImageAPI';
import Busines from './Busines';
import Footer from './Footer';

function Usecase(props) {
    const[api,setapi]=useState(ImageAPI)
    return (
        <>
            <Navbar />
            <hr />
            <div className="container text-center mt-5 usecase">
                <span>Using Podio</span>
                <h1>Whatever you work with, there's a <br /> Podio workspace for it</h1>
                <p>From structuring a project, to organizing your sales team, to transforming 
                the way your entire company works together. Podio can help you simply get the job done, 
                or grow with you to connect all your work in one place.</p>

            </div>
            <div className="container-fluid mt-5">
                <img src="image/use-cases.jpg" alt="use-case" />
            </div>
            <div className="container mt-5 text-center popular">
                <h2>Popular ways of using Podio</h2>
                <p className='text-center'>Here's an overview of the kinds of workflows and processes people love <br /> using Podio for. 
                    Starting with the top three:</p>
            </div>
            <Popular />
            <div className="conainer">
                <div className="row p-3">
                {api.map((res)=>{
                        console.log(res.image);
                        return(
                            <div className="col-2 mt-3 p-3">
                                <img src={res.image} alt="" />
                            </div>
                        )
                    })}
                </div>
            </div>
            <Busines />
            <Footer />
            
        </>
    );
}

export default Usecase;
import React from 'react';
import './mylayout.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Links from './Links';

function Allproducts(props) {
    return (
        <>
            
            <Navbar />
            
            <div className="container-fluid allproducts ">
                <div className="row p-5">
                    <div className="col-6">
                        <img src="img/Customer/customer360-logo.png" alt="" />
                        <h1>Unite your teams and deliver success now.</h1>
                        <p>Customer 360 connects your marketing, sales, commerce, service, 
                           and IT teams around every customer so they can work together while 
                           boosting productivity, increasing efficiency, and decreasing costs. 
                           And with Data Cloud, our best-in-class apps are paired with automation, 
                           intelligence, and real-time data so you can create customer magic from 
                           one trusted platform. That's how you deliver success now.</p>

                        <button className='btn btn-primary mt-5'>SEE ALL PRODUCTS</button>
                        <button className='btn btn-outline-primary mt-5'>WATCH DEMOS</button>
                    </div>
                    <div className="col-6 product-header">
                        <img src="img/Customer/customer-headerbg.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="container-fluid p-5 mt-5">
                <div className="row">
                    <div className="col-6">
                        <img src="img/Customer/dataCloud.jpg" alt="" />
                    </div>
                    <div className="col-6">
                        <h1>Turn data into real-time customer magic with Data Cloud.</h1>
                        <p>Give your teams the most complete view of customer data with Data Cloud. Powerful automation, 
                           always-on intelligence, and real-time hyperscale data help teams instantly personalise every 
                           customer experience from one trusted platform.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-5 mt-5">
                <div className="row">
                    <div className="col-6">
                        <h1>Exceed customer expectations while saving time and money.</h1>
                        <p>Your customers want the best experiences possible. Deliver them every time with Customer 360, 
                            our entire portfolio of products and services. With Customer 360, teams get a shared view of 
                            every customer, so everyone can work together more efficiently on your customers behalf. 
                            The result? Happier, more loyal customers, greater team productivity, and bigger cost savings, 
                            all of which help you reach your business goals even faster.</p>
                    </div>
                    <div className="col-6">
                        <img src="img/Customer/success-video.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="container-fluid p-5 mt-5">
                <div className="row">
                    <div className="col-6">
                        <h1>Bring everyone together on Slack, your Digital HQ.</h1>
                        <p>Discover a more flexible way to connect your teams, apps, and partners all in one place. 
                            With Customer 360 integration and cross-team collaboration tools, everyone can stay efficient, 
                            work together seamlessly, and find success now.</p>
                    </div>
                    <div className="col-6">
                        <img src="img/Customer/desktop.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="container text-center mt-5">
                <h1>See the world through your customers eyes.</h1>
                <p>Get a single, shared view of your customers. With knowledge of your customers 
                    history, interests, and even frustrations, you can begin to serve up experiences 
                    better tailored to their needs and elevate how they see your brand.</p>
                <img src="img/Customer/marketing.jpg" alt="" />
                <div className="row mt-5">
                    <div className="col-1">
                        <img src="img/Customer/bird.jpg" alt="" />
                    </div>
                    <div className="col-4">
                        <p>Learn how you can launch your digital transformation to unite your business around the customer.</p>
                    </div>
                    <div className="col-6">
                        <button className='btn btn-primary'>READ OUR TRANSFORMATION PLAYBOOK</button>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-8">
                    <h1>Any industry, any size, every advantage.</h1>
                    <p>Big or small. Widget maker or purveyor of digital wizardry. We have specialised solutions, 
                        designed in close collaboration with people working in your industry, to support the capabilities 
                        you most need to thrive and grow. And we have an extensive network of ecosystem partners offering 
                        apps and guidance to help you craft a truly customised experience.</p>
                    </div>
                    <div className="row text-center">
                        <div className="col-12">
                            <button className='btn btn-primary'>SEE ALL INDUSTRIES</button>
                        </div>
                    </div>
                </div>
            </div>
            <Links />
            <Footer />
        
        </>
    );
}

export default Allproducts;
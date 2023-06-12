import React from 'react';

function Links(props) {
    return (
        <>
            <div className="container links mt-5">
                <div className="row p-5">
                    <div className="col-3">
                        <img src="img/logo.jpg" alt="" />
                        <div className='row mt-5'>
                            <div className="col-2">
                                <i class="fa-brands fa-square-facebook"></i>
                            </div>
                            <div className="col-2">
                                <i class="fa-brands fa-square-twitter"></i>
                            </div>
                            <div className="col-2">
                                <i class="fa-brands fa-linkedin"></i>
                            </div>
                            <div className="col-2">
                                <i class="fa-brands fa-square-instagram"></i>
                            </div>
                            <div className="col-2">
                                <i class="fa-brands fa-square-youtube"></i>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <p>Call us at 1800-420-7332</p>
                        </div>
                    </div>
                    <div className="col-3">
                        <h4>New to Salesforce?</h4>
                        <ul className='mt-5'>
                            <li><a href="">Why Salesforce</a></li>
                            <li><a href="">What is CRM?</a></li>
                            <li><a href="">Explore All Products</a></li>
                            <li><a href="">What is Cloud Computing?</a></li>
                            <li><a href="">Customer Success</a></li>
                            <li><a href="">Product Pricing</a></li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h4>About Salesforce</h4>
                        <ul className='mt-5'>
                            <li><a href="">Our Story</a></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Press</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Security and Performance</a></li>
                            <li><a href="">Salesforce.org</a></li>
                            <li><a href="">Best CRM Software</a></li>
                            <li><a href="">Sustainability</a></li>
                            <li><a href="">Legal</a></li>
                            <li><a href="">Give us your Feedback</a></li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h4>Popular Links</h4>
                        <ul className='mt-5'>
                            <li><a href="">New Realeas Features</a></li>
                            <li><a href="">Salesforce Mobile App</a></li>
                            <li><a href="">Business App Store</a></li>
                            <li><a href="">Dreamforce</a></li>
                            <li><a href="">CRM Software</a></li>
                            <li><a href="">Salesforce Plus</a></li>
                            <li><a href="">Salesforce for startups</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Links;
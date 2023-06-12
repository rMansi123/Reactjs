import React from 'react';

function FreeTrial(props) {
    return (
        <>
            <div className="conatiner">
                <div className="row ">
                    <div className="col-6">
                        <img src="img/logo.jpg" alt="logo" />
                        <h1>Check out our full demo playlist.</h1><br /><br />
                        <p>See how to unite sales, service, marketing, 
                           and more to grow your business and boost your bottom line.</p>
                    </div>
                    <div className="col-6">
                        <form>
                            <span>Fill out one form to unlock all our resources</span>
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="First name" name="fname" />
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Last name" name="lname" />
                                </div>                            
                            </div>
                            <div className="row mt-3">
                                <div class="col">
                                <select class="form-select" aria-required="true" required='true'>
                                    <option disabled label='Job Title' selected value>Job Title</option>
                                    <option value="Sales_Manager_AP">Sales Manager</option>
                                    <option value="Marketing_PR_Manager_AP">Marketing / PR Manager</option>
                                    <option value="Customer_Service_Manager_AP">Customer Service Manager</option>
                                    <option value="IT_Manager_AP">IT Manager</option>
                                </select>
                                    {/* <input type="text" class="form-control" placeholder="Job Title" name="job" /> */}
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Work Email" name="email" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Company" name="company" />
                                </div>
                                <div class="col">
                                <select class="form-select" aria-required="true" required='true'>
                                    <option disabled label='Employees' selected value>Employees</option>
                                    <option value="1-15_Employees">1-15 employees</option>
                                    <option value="16-50_Employees">16-50 employees</option>
                                    <option value="51-200_Employees">51-200 employees</option>
                                    <option value="201-500_Employees">201-500 employees</option>
                                </select>
                                </div>                            
                            </div>
                            <div class="row mt-3">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Phone" name="phn" />
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Country/Region" name="ind" />
                                </div>                            
                            </div>
                        </form>

                        <span>By registering, you confirm that you agree to the storing and processing of your personal data 
                            by Salesforce as described in the Privacy Statement.</span>
                        
                        <button className='btn btn-primary'>WATCH NOW</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FreeTrial;
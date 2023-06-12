import React from 'react';

function Footer(props) {
    return (
        <>
            <div className="container-fluid footer">
                <div className="row">
                    <div className="col-3 mt-4 text-center">
                        <div className='border border-2 p-3'>
                            <i class="fa-regular fa-globe"></i> Worldwide
                        </div>
                        
                    </div>
                    <div className="col-9 mt-3">
                        <div className="row">
                            <span><i class="fa-regular fa-copyright"></i> Copyright 2023 Salesforce, Inc.
                            <a href=""> All rights reserved</a>. Various trademarks held by their respective
                            owners.</span>
                        </div>
                        <div className="row mt-3">
                            <ul>
                                <li><a href="">Legal</a></li>
                                <li><a href="">Terms of service</a></li>
                                <li><a href="">Privacy</a></li>
                                <li><a href="">Responsible Disclosure</a></li>
                                <li><a href="">Trust</a></li>
                                <li><a href="">Contact</a></li>
                                <li><a href="">Cookie Preferences</a></li>
                                <li><a href="">Your Privacy Choices</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Footer;
import React from 'react';

function Footer(props) {
    return (
        <>
            <hr />
            <div className="container footer">
                <nav>
                    <img src="image/podio-logo.png" alt="logo" />&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="">Privacy and legal terms<i class="fa-solid fa-arrow-up-right-from-square"></i></a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <a href="">Legal note</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <a href="">Podio status<i class="fa-solid fa-arrow-up-right-from-square"></i></a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <a href="">Sitemap</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <a href="">Cookie preferences<i class="fa-solid fa-arrow-up-right-from-square"></i></a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                    <a href="">Do Not Sell My Personal Information<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </nav>
                
            </div>
        </>
    );
}

export default Footer;
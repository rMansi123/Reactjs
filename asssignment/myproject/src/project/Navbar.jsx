import React from 'react';
import{
    Link,
} from "react-router-dom";
import './mylayout.css'

function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                        {/* <a class="navbar-brand" href="#">Navbar</a> */}
                        <img src="img/logo.jpg" alt="Logo" className='mx-3' />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="#">Products</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" href="#">Industries</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" href="#">Learning</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" href="#">Support</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" href="#">Company</Link>
                                </li>        
                                <li className="nav-item">
                                <Link className="nav-link" href="#">Salesforce+</Link>
                                </li>
                            </ul>
                            <form className="d-flex p-3">
                                <button className="btn loginbtn" type="submit">Login</button>
                                <button className="btn btn-success trybtn" type="submit">try for free</button>
                            </form>
                        </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
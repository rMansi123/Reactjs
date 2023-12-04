import React from 'react';
import './layout.css';
import{
    Link,
} from "react-router-dom";

function Navbar(props) {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <img src="image/podio-logo.png" alt="Logo" className='mx-5' />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Feature</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Pricing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/usecase"}>Use Cases</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Request a Demo</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          More
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" href="#">Contact us</Link></li>
            <li><Link className="dropdown-item" href="#">Support</Link></li>
            {/* <li><hr className="dropdown-divider"></li> */}
            <li><Link className="dropdown-item" href="#">Jobs</Link></li>
            <li><Link className="dropdown-item" href="#">Patners</Link></li>
            
          </ul>
        </li>
      </ul>
      <form className="d-flex p-3">
        <button className="btn" type="submit">Login</button>
        <button className="btn signupbtn" type="submit">Sign Up</button>
      </form>
    </div>
  </div>
</nav>
        </>
    );
}

export default Navbar;
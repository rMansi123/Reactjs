import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  import Breakfast from './01breakfast'
  import Lunch from './01lunch'
  import Dinner from './01dinner'

class navbar extends Component {
    render() {
        const returndata = {'/breakfast':'Breakfast','/lunch':'Lunch','/dinner':'Dinner'}
        const mydata = Object.entries(returndata).map((res,i)=>{
            console.log(res);
            return <li className="nav-item" key={i}>
            <Link className="nav-link active" aria-current="page" to={res[0]}>{res[1]}</Link>
            </li>
        })
        return (
            <>
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {mydata}
                            {/* <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to={'/breakfast'}>Breakfast</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={'/lunch'}>Lunch</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={'/dinner'}>Dinner</Link>
                            </li> */}
                        </ul>
                        </div>
                    </div>
                </nav>
            
            <Routes>
                <Route path='/breakfast' element={<Breakfast/>}></Route>
                <Route path='/lunch' element={<Lunch/>}></Route>
                <Route path='/dinner' element={<Dinner/>}></Route>    

            </Routes>
            </Router>
            </>
        );
    }
}

export default navbar;
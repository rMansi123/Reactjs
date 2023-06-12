import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
  import Home from './01home'
  import About from './02About'
  import State from './03state'
  import LifeCycle from './04lifecycle'
  import Compo from './05compo'
  import Api from './API'
  import UseState from './func-compo/01usestate'
  import UseEffect from './func-compo/02useEffect'
  import FuncAPI from './func-compo/03API'
import UseRef from './func-compo/04UseRef';
//   import StyledCompo from './func-compo/05StyledCompo'
  import UseReducer from './func-compo/06UseReducer'
  import UseContext from './func-compo/07UseContext'
  import MyFormik from './func-compo/Formik'
  


  


class navbar extends Component {
    render() {
        const returndata = {'/home':'Home','/about':'About','/state':'State','/lifecycle': 'LifeCycle',
        '/compo':'Compo','/api':'API','/usestate':'UseState','/useEffect':'UseEffect',
        '/funcAPI':'FuncAPI','./useref':'UseRef' ,'./styledcompo':'StyledCompo' ,'./usereducer':'UseReducer', '/usecontext':'UseContext',
        '/myformik':'MyFormik'}
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
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" 
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {mydata}
                        </ul>
                        </div>
                    </div>
                </nav>
            
            <Routes>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/state' element={<State/>}></Route>  
                <Route path='/lifecycle' element={<LifeCycle/>}></Route>
                <Route path='/compo' element={<Compo/>}></Route>
                <Route path='/api' element={<Api/>}></Route>
                <Route path='/usestate' element={<UseState/>}></Route>
                <Route path='/useEffect' element={<UseEffect/>}></Route>
                <Route path='/funcAPI' element={<FuncAPI/>}></Route>
                <Route path='/useref' element={<UseRef/>}></Route>                
                <Route path='/usecontext' element={<UseContext/>}></Route>
                {/* <Route path='/styledcompo' element={<StyledCompo/>}></Route> */}
                <Route path='/usereducer' element={<UseReducer/>}></Route>
                <Route path='/usecontext' element={<UseContext/>}></Route>  
                <Route path='/myformik' element={<MyFormik/>}></Route>                           

                
            </Routes>
            </Router>
            </>
        );
    }
}

export default navbar;
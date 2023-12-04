import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap5/src/css/bootstrap.min.css'
import 'bootstrap5/src/js/bootstrap.bundle.min.js'
import Main from './Layout/Main';
import './Layout/layout.css'

import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Usecase from './Layout/Usecase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* // <Navbar /> */}
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/usecase' element={<Usecase/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

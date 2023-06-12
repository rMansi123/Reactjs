import React from 'react';
import './mylayout.css';
import Navbar from './Navbar';
import Header from './header';
import Products from './Products';
import Together from './Together';
import Customers from './Customers';
import Salesforce from './Salesforce';
import Business from './Business';
import Group from './Group';
import Question from './Question';
// import Allproducts from './Allproducts';
import Links from './Links';
import Footer from './Footer';
import FreeTrial from './Free-trial';

function Main(props) {
    return (
        <div>
            <Navbar />
            <Header />
            <Products />
            <Together />
            <Customers />
            <Salesforce />
            <Business />
            <Group />
            <Question />
            {/* <Allproducts /> */}
            <Links />
            <Footer />
            <FreeTrial />
        </div>
    );
}

export default Main;
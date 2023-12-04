import React from 'react';
import Navbar from './Navbar'
import Header from './Header'
import Imageapi from './Imageapi'
import Drive from './Drive'
import Collabrate from './Collabrate';
import Features from './Features';
import Busines from './Busines';
import Footer from './Footer';
// import Usecase from './Usecase';

function Main(props) {
    return (
        <div>
            <Navbar />
            <Header />
            <Imageapi />
            <Drive />
            <Collabrate/>
            <Features />
            <Busines />
            {/* <Usecase /> */}
            <Footer />
        </div>
    );
}

export default Main;
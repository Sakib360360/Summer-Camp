import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../SharedPages/NavBar/NavBar';
import Footer from '../../SharedPages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
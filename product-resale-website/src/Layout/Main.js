import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Home/Shared/Navbar/Navbar';
import Footer from '../Pages/Home/Home/Shared/Footer/Footer';

const Main = () => {
    return (
        <di>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </di>
    );
};

export default Main;
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar.jsx'
import Adnavbar from './navbar/Adnavbar.jsx'
import Footer from './Footer/Footer.jsx'
import './adminlayout.css'
const AdminLayout = () => {
    return (
        <>
            <header>
                <div id='sidebarMenu'>
                <Sidebar/>
                </div>
                <Adnavbar />
            </header>
            <main  className='mainadminlayout mt-5 '>
                <div className="container pt-4">
                <Outlet></Outlet>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default AdminLayout;

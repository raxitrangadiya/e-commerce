import {createBrowserRouter,Routes,Route, BrowserRouter, Navigate, Form, useNavigate, Link} from "react-router-dom";
import Navbar from "./Navbar.jsx"
// import Dynamicmenu from "../comman component/Dynamicmenu.jsx"
import LoaderCompo from "../comman component/LoaderCompo.jsx"
import Home from '../component/Home/Home.jsx'
import Aboutus from '../component/About us/Aboutus.jsx'
import Contactus from '../component/Contact us/Contactus.jsx'
import Api from '../component/Api/Api.jsx'
import Login from '../component/Login/MainLogin.jsx'
import Register from '../component/Login/Register.jsx'
// import Admin from '../component/Admin/Adminpanel.jsx'
import React, { Suspense } from "react";
// import { useCookies } from "react-cookie";
// import { useEffect } from "react";
// import Cookies from "cookies";
// const RouterProtect = ()=>{
// const [Cookies]=useCookies(['role_id']);
// const navigate =useNavigate();
// useEffect(()=>{
//     const roleIdCookie=Cookies['role_id'];
//     console.log(roleIdCookie);
//     if (roleIdCookie) {
//         if (roleIdCookie === 1) {
//             navigate(<Admin/>)
//         } else {
//             navigate(Link="/")
//         }
//     }
    
// },[Cookies,navigate])
// }
const AdminCompoRoute=React.lazy(()=>import("../component/Admin/Adminroute.jsx"))
const router= createBrowserRouter([
    {
        path: "/",
        element:<><Navbar/><Home/></>
    },
    // {
    //     path: "/:url",
    //     element:<><Navbar/><Dynamicmenu/></>
    // },
    {
        path: "/aboutus",
        element:<><Navbar/><Aboutus/></>
    },
    {
        path: "/contactus",
        element:<><Navbar/><Contactus/></>
    },
    {
        path: "/api",
        element:<><Navbar/><Api/></>
    },
    {
        path: "/login",
        element:<><Login/></>,
    },
    {
        path:"/register",
        element:<><Register/></>
        
    },
    {
        path:"admin/*",
        element:<Suspense fallback={LoaderCompo}><AdminCompoRoute/></Suspense>
    }
   
])
export default router
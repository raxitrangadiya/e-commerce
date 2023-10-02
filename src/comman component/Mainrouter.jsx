import {createBrowserRouter} from "react-router-dom";
import Navbar from "./Navbar.jsx"
import Dynamicmenu from "../comman component/Dynamicmenu.jsx"
import Home from '../component/Home/Home.jsx'
import Aboutus from '../component/About us/Aboutus.jsx'
import Contactus from '../component/Contact us/Contactus.jsx'
import Api from '../component/Api/Api.jsx'
import Login from '../component/Login/MainLogin.jsx'
import Register from '../component/Login/Register.jsx'
import Admin from '../component/Admin/Adminpanel.jsx'
const router= createBrowserRouter([
    {
        path: "/",
        element:<><Navbar/><Home/></>
    },
    {
        path: "/:url",
        element:<><Navbar/><Dynamicmenu/></>
    },
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
        path:"/admindashboard",
        element:<><Admin/></>
        
    },
])
export default router
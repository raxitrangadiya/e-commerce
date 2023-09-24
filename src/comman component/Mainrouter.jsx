import {createBrowserRouter} from "react-router-dom";
import Navbar from "./Navbar.jsx"
import Dynamicmenu from "../comman component/Dynamicmenu.jsx"
import Home from '../component/Home.jsx'
import Aboutus from '../component/Aboutus.jsx'
import Contactus from '../component/Contactus.jsx'
import Api from '../component/Api.jsx'
import Login from '../component/Login.jsx'
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
    // {
    //     path: "/contactus",
    //     element:<><Navbar/><Contactus/></>
    // },
    // {
    //     path: "/api",
    //     element:<><Navbar/><Api/></>
    // },
    // {
    //     path: "/login",
    //     element:<><Navbar/><Login/></>
    // }
])
export default router
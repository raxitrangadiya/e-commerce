import React, { useEffect, useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    // MDBNavbarLink,
    MDBBtn,
    // MDBDropdown,
    // MDBDropdownToggle,
    // MDBDropdownMenu,
    // MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function App() {
    const [showBasic, setShowBasic] = useState(false);
    const [Menuitem, setMenuitem] = useState([]);
    console.log("menu-item", Menuitem);
    useEffect(() => {
        const GetMenu = async () => {
            const reqData = await fetch('http://localhost:3004/menu')
            const Resdata = await reqData.json()
            setMenuitem(Resdata)
        }
        GetMenu();
    }, [])
    // Convert the Menuitem array into a single object
    const menuObject = Menuitem.reduce((acc, item) => {
        return { ...acc, ...item };
      }, {});


console.log("menu objecr",menuObject);
    // console.log("set menu item",setMenuitem);
    // let DynemicMenu = Menuitem.map(([key, val], index) => {
    //     return <MDBNavbarItem key={index}>
    //         <Link className="nav-link" to={key}>{val}</Link>
    //     </MDBNavbarItem>
    // })
    const MeniPrint = Object.entries(menuObject).map(([key, val]) => (
        <MDBNavbarItem key={key}>
          <Link className="nav-link" to={key}>
            {val}
          </Link>
        </MDBNavbarItem>
      ));


    return (
        <MDBNavbar sticky transparent expand='lg' bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand className='' href='#'><img src="images/logo.png" alt="" /></MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}>
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <Link className='nav-link' to='/'>Home</Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link className="nav-link" to='/login'>Login</Link>
                        </MDBNavbarItem>
                     {MeniPrint}
                    </MDBNavbarNav>

                    <form className='d-flex input-group w-auto'>
                        <input type='search' className='form-control' placeholder='Search' aria-label='Search' />
                        <MDBBtn color='primary'>Search</MDBBtn>
                    </form>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
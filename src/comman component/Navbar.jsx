import React, { useEffect, useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBBtn,
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

export default function App() {
    const [showBasic, setShowBasic] = useState(false);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const GetMenu = async () => {
            try {
                const reqData = await fetch('http://localhost:3004/menu');
                const Resdata = await reqData.json();
                setMenuItems(Resdata);
            } catch (error) {
                console.error("Error fetching menu data:", error);
            }
        }
        GetMenu();
    }, []);

    const renderMenuItems = () => {
        const menuObject = menuItems.reduce((acc, item) => {
            return { ...acc, ...item };
        }, {});
        return Object.entries(menuObject).map(([key, val]) => (
            <MDBNavbarItem key={key}>
                <NavLink className="nav-link active" to={key}>
                    {val}
                </NavLink>
            </MDBNavbarItem>
        ));
    };

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
                        {renderMenuItems()}
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

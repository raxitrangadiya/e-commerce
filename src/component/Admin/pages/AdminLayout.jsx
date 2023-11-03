import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './adminlayoutnew.css'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
const AdminLayout = () => {
    const [aside, setasie] = useState(false)
    const btnclick = () => {
        setasie(!aside)
    }
    return (
        // <>
        //     <header>
        //         <div>
        //             <aside className={sidemenutoggle ? "sidebar" : ""}>
        //                 <button  onClick={() => { setSideMenuToggle(!sidemenutoggle) }} className="" >call</button>
        //                 <nav  id="sidebarMenu" className="toggle collapse d-lg-block sidebar collapse bg-white">
        //                     <div className="position-sticky">
        //                         <div className="list-group list-group-flush mx-3 mt-4">
        //                             <Link to="admindashboard" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
        //                                 <i className="fas fa-tachometer-alt fa-fw me-3"></i><span> Dashboard</span>
        //                             </Link>
        //                             <Link to="users" className="list-group-item list-group-item-action py-2 ripple">
        //                                 <i className="fa-solid fa-user fa-fw me-3"></i><span>Users</span>
        //                             </Link>
        //                             <Link to="productmanage" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-lock fa-fw me-3"></i><span>Product</span></Link>
        //                             <Link to="productreview" className="list-group-item list-group-item-action py-2 ripple">
        //                                 <i className="fas fa-chart-pie fa-fw me-3"></i><span>Review</span>
        //                             </Link>


        //                         </div>
        //                     </div>
        //                     {/* <Outlet></Outlet> */}
        //                 </nav>
        //             </aside>
        //         </div>
        //         <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        //             <div className="container-fluid">
        //                 <button onClick={setToogle} className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        //                     <i className={sidemenutoggle ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
        //                 </button>
        //                 <a className="navbar-brand" href="#">
        //                     <img src="images/logo.png" height="25" alt="" loading="lazy" />
        //                 </a>
        //                 <form className="d-none d-md-flex input-group w-auto my-auto">
        //                     <input autocomplete="off" type="search" className="form-control admnavinp rounded" placeholder='Search (ctrl + "/" to focus)' />
        //                     <span className="input-group-text border-0"><i className="fas fa-search"></i></span>
        //                 </form>

        //                 <ul className="navbar-nav ms-auto d-flex flex-row">
        //                     <li className="nav-item dropdown">
        //                         <a className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
        //                             <i className="fas fa-bell"></i>
        //                             <span className="badge rounded-pill badge-notification bg-danger">1</span>
        //                         </a>
        //                         <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
        //                             <li><a className="dropdown-item" href="#">Some news</a></li>
        //                             <li><a className="dropdown-item" href="#">Another news</a></li>
        //                             <li>
        //                                 <a className="dropdown-item" href="#">Something else here</a>
        //                             </li>
        //                         </ul>
        //                     </li>

        //                     <li className="nav-item">
        //                         <a className="nav-link me-3 me-lg-0" href="#">
        //                             <i className="fas fa-fill-drip"></i>
        //                         </a>
        //                     </li>
        //                     <li className="nav-item me-3 me-lg-0">
        //                         <a className="nav-link" href="#">
        //                             <i className="fab fa-github"></i>
        //                         </a>
        //                     </li>

        //                     <li className="nav-item dropdown">
        //                         <a className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
        //                             <i className="united kingdom flag m-0"></i>
        //                         </a>
        //                         <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
        //                             <li>
        //                                 <a className="dropdown-item" href="#"><i className="united kingdom flag"></i>English
        //                                     <i className="fa fa-check text-success ms-2"></i></a>
        //                             </li>
        //                             <li>
        //                                 <hr className="dropdown-divider" />
        //                             </li>
        //                             <li>
        //                                 <a className="dropdown-item" href="#"><i className="poland flag"></i>Polski</a>
        //                             </li>
        //                             <li>
        //                                 <a className="dropdown-item" href="#"><i className="china flag"></i>中文</a>
        //                             </li>
        //                             <li>
        //                                 <a className="dropdown-item" href="#"><i className="japan flag"></i>日本語</a>
        //                             </li>
        //                             <li>
        //                                 <a className="dropdown-item" href="#"><i className="germany flag"></i>Deutsch</a>
        //                             </li>
        //                             <li>
        //                                 <a className="dropdown-item" href="#"><i className="france flag"></i>Français</a>
        //                             </li>
        //                             <li>
        //                                 <a className="dropdown-item" href="#"><i className="spain flag"></i>Español</a>
        //                             </li>
        //                             <li>
        //                                 <a className="dropdown-item" href="#"><i className="russia flag"></i>Русский</a>
        //                             </li>
        //                             <li>
        //                                 <a className="dropdown-item" href="#"><i className="portugal flag"></i>Português</a>
        //                             </li>
        //                         </ul>
        //                     </li>

        //                     <li className="nav-item dropdown">
        //                         <a className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
        //                             <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height="22" alt="" loading="lazy" />
        //                         </a>
        //                         <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
        //                             <li><a className="dropdown-item" href="#">My profile</a></li>
        //                             <li><a className="dropdown-item" href="#">Settings</a></li>
        //                             <li><a className="dropdown-item" href="#">Logout</a></li>
        //                         </ul>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </nav>
        //     </header>
        //     <main className='mainadminlayout mt-5 '>
        //         <div className="container pt-4">
        //             <Outlet></Outlet>
        //         </div>
        //     </main>
        //     <Footer />
        // </>
        <>
            <aside id="sidebar" className={aside ? "sidebaractive" : ""}>
                <nav id="sidebarMenu" className="toggle collapse d-lg-block sidebar collapse ">
                    <div className="position-sticky">
                        <div className=" list-group list-group-flush mx-3 mt-4">
                            <Link to="admindashboard" className="list-group-item list-group-item-action  ripple" aria-current="true">
                                <i className="fas fa-tachometer-alt fa-fw me-3"></i><span> Dashboard</span>
                            </Link>
                            <Link to="users" className="list-group-item list-group-item-action py-2 ripple">
                                <i className="fa-solid fa-user fa-fw me-3"></i><span>Users</span>
                            </Link>
                            <Link to="productmanage" className="list-group-item list-group-item-action py-2 ripple"><i className="fas fa-lock fa-fw me-3"></i><span>Product</span></Link>
                            <Link to="productreview" className="list-group-item list-group-item-action py-2 ripple">
                                <i className="fas fa-chart-pie fa-fw me-3"></i><span>Review</span>
                            </Link>


                        </div>
                    </div>
                </nav>
            </aside >

            <main id="main" className={aside ? "mainactive" : ""}>
                <header className='hedaer'>
                    <div className="d-flex align-items-center">
                        <div className="col">
                            <h2 id="btnclick" onClick={btnclick} className=' p-2 mb-0'><i className={aside ? "fa-solid fa-times" : "fa-solid fa-bars"}></i></h2>
                        </div>
                        <div className="col ">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="input_box">

                                    <form className='d-flex input-group w-auto'>
                                        <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                                        <MDBBtn color='primary'>Search</MDBBtn>
                                    </form>
                                </div>
                                <div className="list me-5">
                                    <ul className='mb-0'>
                                        <li><Link to="/login"><i className="fa-solid fa-user"></i></Link></li>
                                        <li><Link to="/"><i className="fa-solid fa-house"></i></Link></li>
                                        {/* <li><i className="fa-solid  fa-bell"></i></li> */}
                                    </ul>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                     <li><a className="dropdown-item" href="#">My profile</a></li>
                                     <li><a className="dropdown-item" href="#">Settings</a></li>
                                     <li><a className="dropdown-item" href="#">Logout</a></li>
                               </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section  className= 'bg-light px-2 pt-3'>
                    <Outlet></Outlet>
                </section>
            </main>
        </>
    );
};

export default AdminLayout;

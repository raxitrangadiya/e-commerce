import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <>
            <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
                <div className="position-sticky">
                    <div className="list-group list-group-flush mx-3 mt-4">
                        <Link to="admindashboard" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
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
        </>
    );
};

export default Sidebar;
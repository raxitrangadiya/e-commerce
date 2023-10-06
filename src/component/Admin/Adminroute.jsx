import React from 'react';
import { useRoutes } from 'react-router-dom';
import AdminLayout from './pages/AdminLayout.jsx'
import Admindash from './pages/dashboard/Dashboard.jsx'
import UsersAdmin from './pages/user/UsersAdmin.jsx'
import ProductManagement from './pages/product/ProductManagement.jsx'
import ProductReview from './pages/review/ProductReview.jsx'
const Adminroute = () => {
    const routes = useRoutes([
        {
            path: "dashboard",
            element: <AdminLayout />,
            children: [
                {
                    path: 'admindashboard',
                    element: <Admindash />
                },
                {
                    path: 'users',
                    element: <UsersAdmin />
                },
                {
                    path: 'productmanage',
                    element: <ProductManagement />
                },
                {
                    path: 'productreview',
                    element: <ProductReview />
                },

            ]
        }
    ]);
    return routes
};

export default Adminroute;
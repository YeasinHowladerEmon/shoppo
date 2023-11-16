import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AllUser from '../pages/Dashboard/Admin/AllUser';
import AllProducts from '../pages/Dashboard/Admin/AllProducts';
import AllOrders from '../pages/Dashboard/Admin/AllOrders';
import EditProduct from '../pages/Dashboard/Admin/EditProduct';


import AdminProfile from '../pages/Dashboard/Admin/AdminProfile';
import Login from '../components/Auth/Login';
import SignUp from '../components/Auth/SignUp';
import NotFound from '../components/NotFound';
import ForgetPassword from '../components/Auth/ForgetPassword';
import Home from '../pages/HomeAndOthers/Home';
import Products from '../pages/HomeAndOthers/Products';
import ProductDetails from '../components/ProductDetails';
import AddProduct from '../pages/Dashboard/Admin/AddProduct';
import DashboardSetting from '../pages/Dashboard/Admin/DashboardSetting';
import AdminDashboard from '../pages/Dashboard/AdminDashboard';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/product-details/:id',
                element: <ProductDetails />
            },
            {
                path: '/admin',
                // element: <AdminDashboard />,
                children: [
                    {
                        index: true,
                        // path: '/dashboard/setting',
                        element: <DashboardSetting />
                    },
                    {
                        path: '/admin/profile',
                        element: <AdminProfile />
                    },
                    {
                        path: '/admin/users',
                        element: <AllUser />
                    },
                    {
                        path: '/admin/allProducts',
                        element: <AllProducts />
                    },
                    {
                        path: '/admin/allOrders',
                        element: <AllOrders/>
                    },
                    {
                        path: '/admin/addProduct',
                        element: <AddProduct />
                    },
                    {
                        path: '/admin/editProduct',
                        element: <EditProduct />
                    },
                    
                ]
            },
        ]
    },
    {
        path: '/forgetPassword',
        element: <ForgetPassword />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/*',
        element: <NotFound />
    },
]);

export default routes;
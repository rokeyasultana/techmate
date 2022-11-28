import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AllUsers from "../../Pages/Dashboard/AllUsers";
import AddProduct from "../../Pages/Dashboard/Dashboard/AddProduct";
import ALLBuyers from "../../Pages/Dashboard/Dashboard/ALLBuyers";
import Buyers from "../../Pages/Dashboard/Dashboard/ALLBuyers";
import ALLSellers from "../../Pages/Dashboard/Dashboard/ALLSellers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ErrorElement from "../../Pages/ErrorElement/ErrorElement";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";
import AdminRoute from "../AdminRoute/AdminRoutes";
import PrivateRoute from "../PrivateRoutes/PrivateRoutes";


 const router= createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/products/:id',
                element:<PrivateRoute>
                    <ProductDetails></ProductDetails>
                </PrivateRoute>,
                loader:({params})=> fetch(`https://products-resale-website-server.vercel.app/products/${params.id}`)
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signUp',
                element:<SignUp></SignUp>
            },
        ]
    },
    {
        path: '/dashboard',
        element:<PrivateRoute>
  <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
     
    
   children:[
{
    path:'/dashboard',
    element:<Dashboard></Dashboard>
},
{
    path:'/dashboard/buyer',
    element:<ALLBuyers></ALLBuyers>
},
{
    path:'/dashboard/seller',
    element:<ALLSellers></ALLSellers>
},
{
    path:'/dashboard/addProduct',
    element:<AdminRoute>
        <AddProduct></AddProduct>
    </AdminRoute>
},
{
    path:'/dashboard/allUsers',
    element:
        <AllUsers></AllUsers>
   
},



   ]
         }
])
export default router;
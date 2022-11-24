import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import ErrorElement from "../../Pages/ErrorElement/ErrorElement";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";


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
    }
])
export default router;
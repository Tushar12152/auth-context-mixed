import { createBrowserRouter } from "react-router-dom";
import Route from "../Route/Route";
import Home from "../component/Home/Home";
import Login from "../component/login/Login";
import Register from "../component/register/Register";
import Orders from "../component/orders/Orders";
import PrivateRoute from "../routs/PrivateRoute";
import Profile from "../component/Profile/Profile";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Route></Route>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/orders',
                element:<PrivateRoute><Orders></Orders></PrivateRoute>
            },
            {

                path:'/profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
])
export default Router;
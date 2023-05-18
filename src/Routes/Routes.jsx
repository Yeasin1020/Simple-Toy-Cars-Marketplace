import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/Login/LogIn";
import SignUp from "../pages/Home/Signup/SignUp";
import AddToys from "../pages/AddToys/AddToys";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
import MyToys from "../pages/MyToys/MyToys";
import Error from "../pages/Error/Error";

const router = createBrowserRouter([
	{
		path: "*",
		element: <Error></Error>
	},
  {
    path: "/",
    element: <Main></Main>,
	
	children: [
		
		{
			path: "/",
			element: <Home></Home>
		},
		{
			path: "/login",
			element: <LogIn></LogIn>
		},
		{
			path: "/signUp",
			element: <SignUp></SignUp>
		},
		{
			path: "/blog",
			element: <Blog></Blog>
			
		},
		{
			path: "/addToys",
			element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
		},
		{
			path: "/myToys",
			element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
		}
	]
  },
]);

export default router;

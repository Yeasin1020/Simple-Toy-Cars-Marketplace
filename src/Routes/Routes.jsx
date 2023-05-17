import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/Login/LogIn";
import SignUp from "../pages/Home/Signup/SignUp";
import AddToys from "../pages/AddToys/AddToys";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
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
			
		},
		{
			path: "/addToys",
			element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
		}
	]
  },
]);

export default router;

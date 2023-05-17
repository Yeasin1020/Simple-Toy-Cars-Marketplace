import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/Login/LogIn";
import SignUp from "../pages/Home/Signup/SignUp";

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
			
		}
	]
  },
]);

export default router;

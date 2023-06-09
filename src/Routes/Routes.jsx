import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/Login/LogIn";
import SignUp from "../pages/Home/Signup/SignUp";
import AddToys from "../pages/AddToys/AddToys";
import Blog from "../pages/Blog/Blog";
import MyToys from "../pages/MyToys/MyToys";
import Error from "../pages/Error/Error";
import AllToys from "../pages/AllToys/AllToys";
import SingleToyData from "../pages/SingleToyData/SingleToyData";
import PrivateRoute from "./PrivateRoute";
import UpdateData from "../UpdataData/UpdateData";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Error></Error>,
  },
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/addToys",
        element: <AddToys></AddToys>,
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/toy/:id",
        element: <SingleToyData></SingleToyData>,
      },
      {
        path: "/singleToy/:id",
        element: <PrivateRoute><SingleToyData></SingleToyData></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://toy-car-server-production.up.railway.app/singleToy/${params.id}`),
      },
      {
        path: "/update/:id",
        element:<UpdateData></UpdateData>,
        loader: ({params}) => fetch(`https://toy-car-server-production.up.railway.app/update/${params.id}`)
      }
    ],
  },
]);

export default router;

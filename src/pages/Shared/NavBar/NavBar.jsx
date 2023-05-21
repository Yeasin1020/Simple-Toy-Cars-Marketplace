import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { Avatar } from "flowbite-react";
import { FaBaby } from "react-icons/fa";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar  p-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  mb-5 rounded-lg mt-5  ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns=""
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="list-none menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/" className="text-pink-600 font-bold  hover:bg-pink-300 hover:text-black">Home</Link>
            </li>
            <li tabIndex={0}>
              
            </li>
            <li>
              <Link to="/allToys" className="text-pink-600 font-bold  hover:bg-pink-300 hover:text-black">All Toys</Link>
            </li>
            <li>
              <Link to="/myToys" className="text-pink-600 font-bold  hover:bg-pink-300 hover:text-black">My Toys</Link>
            </li>
            <li>
              <Link to="/addToys" className="text-pink-600 font-bold  hover:bg-pink-300 hover:text-black">Add A Toys</Link>
            </li>
            <li>
              <Link to="/blog" className="text-pink-600 font-bold hover:bg-pink-300 hover:text-black">Blog</Link>
            </li>
          </ul>
        </div>
        <button className="ml-5  normal-case text-xl  ">
        <FaBaby className="h-10 w-10 text-orange-600"></FaBaby>
        </button>
        <h1 className=" lg:text-[40px] pl-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Toys Cars</h1>
      </div>
      <div className="navbar-center hidden lg:flex bg-pink-100 rounded-xl">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="text-pink-600 font-bold  hover:bg-pink-300 hover:text-black">Home</Link>
          </li>
          {user ? (
            <div className="flex">
              <li>
                <Link to="/allToys" className="text-pink-600 font-bold  hover:bg-pink-300 hover:text-black">All Toys</Link>
              </li>
              <li>
                <Link to="/myToys" className="text-pink-600 font-bold  hover:bg-pink-300 hover:text-black">My Toys</Link>
              </li>
              <li>
                <Link to="/addToys" className="text-pink-600 font-bold  hover:bg-pink-300 hover:text-black">Add A Toys</Link>
              </li>
            </div>
          ) : (
            ""
          )}
          <li>
            <Link to="/blog" className="text-pink-600 font-bold  hover:bg-pink-300 hover:text-black">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <li>
              <Avatar
                title={user?.displayName}
                className=" h-10 w-10 mt-[-20px] mr-5 rounded-2xl"
                img={user?.photoURL}
                rounded={true}
              />
            </li>
            <li className=" list-none">
              <button onClick={handleLogOut} className=" px-4 py-2 rounded-lg text-red-800 font-bold bg-red-300 hover:bg-red-500 hover:text-black">
                LogOut
              </button>
            </li>
          </>
        ) : (
          <li className=" list-none">
            <Link to="/login" className="px-4 py-2 rounded-lg text-red-800 font-bold  hover:bg-red-300 hover:text-black">
              LogIn
            </Link>
          </li>
        )}
      </div>
    </div>
  );
};

export default NavBar;

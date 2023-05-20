import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { Avatar } from "flowbite-react";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-gray-200 p-5 rounded-lg mt-5 mb-10">
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
              <Link className="justify-between text-pink-600 font-extrabold  hover:bg-pink-300 hover:text-black">All Toys</Link>
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
        <Link className="ml-5 mb-7 normal-case text-xl w-16 h-5">
          <img
            className="rounded-full"
            src="https://i.ibb.co/GTcXwv3/a6a99e988fb4de345d5943a5160fe2378c1b0a6e-1024-1023.jpg"
            alt=""
          />
        </Link>
        <h1 className=" font-extrabold text-[40px] ml-3 text-pink-600">Toys Cars</h1>
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
              <button onClick={handleLogOut} className=" px-4 py-2 rounded-lg text-red-800 font-bold  hover:bg-red-300 hover:text-black">
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

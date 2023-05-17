import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>Home</Link>
            </li>
            <li tabIndex={0}>
              <Link className="justify-between">All Toys</Link>
            </li>
            <li>
              <Link>My Toys</Link>
            </li>
            <li>
              <Link>Add A Toys</Link>
            </li>
            <li>
              <Link>Blog</Link>
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
        <h1 className="font-bold text-xl ml-3">Toys Cars</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>My Toys</Link>
          </li>
          <li>
            <Link>Add A Toys</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn">LogIn</Link>
      </div>
    </div>
  );
};

export default NavBar;

import { useContext, useEffect } from "react";
import {  FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const LogIn = () => {
  useEffect(()=> {
    document.title = "Toy-car-Login"
  },[])

  const {signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogIn = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            if(loggedUser){
              Swal.fire({
                title: 'Successfully logIn with Email Password!',
                text: 'Welcome to our Toys Cars Shop',
                icon: 'success',
                confirmButtonText: 'Oky'
              })
            }
            navigate(from, {replace: true})
        })
        .catch(error=>{
            console.log(error)
        })

        
    }

    const handleGoogleLogIn = () => {
        googleSignIn()
          .then((result) => {
            const user = result.user;
            console.log(user)
            if(user){
              Swal.fire({
                title: 'Successfully logIn with gmail!',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Oky'
              })
            }
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.log("error", error.message);
          });
      };
    
     
     



  return (
    <div className="">
      <section className=" mb-10 mt-10">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Please Login
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                onSubmit={handleLogIn}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    // for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    // for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="">
                  <button
                    onClick={handleGoogleLogIn}
					
                    type="button"
                    className=" mx-auto py-1 px-2 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    <div className="flex items-center">
                      <FaGoogle className="mr-2" /> Log In With Google
                    </div>
                  </button>
                 
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?
                  <Link
                    to="/signUp"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogIn;

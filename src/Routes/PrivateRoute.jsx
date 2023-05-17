import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "flowbite-react";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return (
      <div className="ml-[50%]">
        <div className=" text-center mt-10 mb-10 w-12 h-12">
          <Spinner
            className="text-green-600"
            aria-label="Center-aligned spinner example"
          />
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;

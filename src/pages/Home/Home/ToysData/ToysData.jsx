import ReactStars from "react-rating-stars-component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import { Link } from "react-router-dom";

const ToysData = ({ toysCar }) => {
  const { user } = useContext(AuthContext);

  const handleTost = () => {
    if (!user) {
      return toast.error("Please login now");
    }
  };

  const {
    text,
    AvailableQuantity,
    DetailDescription,
    Price,
    Rating,
    ToysName,
    Url,
    category,
    email,
    _id,
  } = toysCar || {};
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-56 h-46" src={Url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{category}</h2>
        <h2 className=" font-medium">Price: {Price} BDT</h2>
        <p className="font-medium">{DetailDescription}</p>
        <div className="flex mb-3 mt-2">
          <ReactStars
            count={5}
            edit={false}
            size={24}
            isHalf={true}
            value={Rating}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />

          <span className=" w-9 p-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
            {Rating}
          </span>
        </div>
        <div className="card-actions">
          <Link to={`/singleToy/${_id}`}>
            <button
              type="button"
              onClick={handleTost()}
              className="btn btn-primary"
            >
              View Details
            </button>
          </Link>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ToysData;

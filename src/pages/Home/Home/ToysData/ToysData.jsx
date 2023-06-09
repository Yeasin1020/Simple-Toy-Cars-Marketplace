import ReactStars from "react-rating-stars-component";

import { useContext, useEffect } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const ToysData = ({ toysCar }) => {
  const { user } = useContext(AuthContext);

  useEffect(()=> {
    AOS.init({duration:2000})
  },[])

  const handleTost = () => {
    if (!user) {
      return toast.error("You have must login now", { duration: 3000 });
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
    <div data-aos="fade-up" className="card card-compact mb-10 w-96 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300  hover:from-pink-500 hover:to-yellow-500 shadow-xl hover:bg-pink-100 hover:shadow-pink-500 mx-auto">
      <figure>
        <img className="w-56 h-46 mt-5" src={Url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-black">{category}</h2>
        <h2 className=" font-medium text-black">Price: {Price} BDT</h2>
        <p className="font-medium text-black">{DetailDescription}</p>
        <div  className="flex mb-3 mt-2">
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
              onClick={handleTost}
              className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 border-none hover:bg-white hover:text-black"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ToysData;

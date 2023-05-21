import React from 'react';
import { Toaster, toast } from "react-hot-toast";
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

const TopCategory = () => {

	const handleTost = () => {
		
		  return toast.error("This didn't work.",{duration:2000})
			
		
	  };
	return (
		<div>
			<h1>Top Category</h1>
			<div className="card card-compact mb-10 w-96  mx-auto">
      <figure>
        <img className="w-56 h-46 mt-5" src="" alt="Shoes" />
      </figure>
      <div className="card-body bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300  hover:from-pink-500 hover:to-yellow-500 shadow-xl hover:bg-pink-100 hover:shadow-pink-500">
        <h2 className="card-title font-bold"></h2>
        <h2 className=" font-medium">Price:  BDT</h2>
        <p className="font-medium"></p>
        <div className="flex mb-3 mt-2">
          <ReactStars
            count={5}
            edit={false}
            size={24}
            isHalf={true}
            // value={Rating}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />

          <span className=" w-9 p-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
            
          </span>
        </div>
        <div className="card-actions">
          <Link>
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
		</div>
	);
};

export default TopCategory;
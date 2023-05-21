import { useLoaderData } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SingleToyData = () => {
  useEffect(()=> {
    document.title = "Toy-car-Details"
  },[])
  useEffect(()=> {
    AOS.init({duration:2000})
  },[])

  const data = useLoaderData();
  const {
    text,
    email,
    category,
    Url,
    Price,
    Rating,
    ToysName,
    DetailDescription,
	AvailableQuantity
  } = data;
  console.log(text, email);
  return (
    <div data-aos="fade-up" className="mx-5 rounded-xl hover:shadow-pink-500">
      <div className=" grid lg:grid-cols-2  lg:mt-24 w-auto  lg:h-[500px] mb-10 bg-gradient-to-r from-indigo-400 via-purple-100 to-pink-100  mx-auto shadow-xl hover:shadow-pink-500">
        <figure>
          <img
            className=" lg:mt-20 lg:ml-20 lg:w-[300px] lg:h-[300px]"
            src={Url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body mx-auto lg:mt-20">
          <h2 className="card-title font-bold text-black">ToyName: {category}</h2>
          <h2 className=" font-medium"><span className="font-bold text-black">ToyPrice:</span> {Price} BDT</h2>
          <h2 className="card-title font-bold text-black">Name: {text}</h2>
          <h2 className="card-title font-bold text-black">Email: {email}</h2>
          <h2 className="card-title font-bold text-black">AvailableQuantity: {AvailableQuantity}</h2>
          <p className="font-medium text-black">{DetailDescription}</p>
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

            <span className=" w-9 p-3 rounded bg-blue-100 px-2.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
              {Rating}
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SingleToyData;

import React, { useEffect } from "react";

import ReactStars from "react-rating-stars-component";
import AOS from "aos";
import "aos/dist/aos.css";

const TopCategory = () => {
  useEffect(()=> {
    AOS.init({duration:2000})
  },[])
  return (
    <div>
      <h1 className="text-center font-bold text-[40px]">Top Category</h1>
      <div data-aos="fade-up" className="grid grid-cols-1 lg:grid-cols-3">
        {/* 1st */}
        <div className="card card-compact mb-10 w-96 bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500 shadow-xl hover:bg-pink-100 hover:shadow-pink-500  mx-auto">
          <figure>
            <img
              className="w-56 h-46 mt-5"
              src="https://i.ibb.co/G25XWNW/Screenshot-2023-05-21-065344-removebg-preview.png"
              alt=""
            />
          </figure>
          <div  className="card-body bg-gradient-to-r rounded-lg from-indigo-300 via-purple-300 to-pink-300 ">
            <h2  className="card-title font-bold text-black">Toy Simple Car</h2>
            <h2 className="  text-black font-bold">Best Popular Toy Car</h2>
            <p className="font-medium text-black">
              Toy cars provide children with a fun and engaging way to explore
              the world of vehicles and indulge in imaginative play. They
              encourage creativity, fine motor skills, and cognitive development
              while providing hours of entertainment and enjoyment
            </p>
            <div className="flex mb-3 mt-2">
              <ReactStars
                count={5}
                edit={false}
                size={24}
                isHalf={true}
                value={5}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />

              <span className=" w-9 p-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                5
              </span>
            </div>
            <div className="card-actions"></div>
          </div>
        </div>
        {/* 2nd */}
        <div className="card card-compact mb-10 w-96 bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500 shadow-xl hover:bg-pink-100 hover:shadow-pink-500  mx-auto">
          <figure>
            <img
              className="w-56 h-46 mt-5"
              src="https://i.ibb.co/LzWSfyM/istockphoto-482532297-612x612-removebg-preview.jpg"
              alt=""
            />
          </figure>
          <div className="card-body bg-gradient-to-r rounded-lg from-indigo-300 via-purple-300 to-pink-300 ">
            <h2 className="card-title font-bold text-black">
              Ferrari 360 Modena sports car
            </h2>
            <h2 className=" font-bold text-black">Best Selling Car</h2>
            <p className="font-medium text-black">
              The 360 Modena offers a thrilling driving experience, allowing
              drivers to feel the raw power of its engine as they accelerate on
              open roads. Its advanced suspension system ensures exceptional
              control and responsiveness, providing a smooth and dynamic ride.
            </p>
            <div className="flex mb-3 mt-2">
              <ReactStars
                count={5}
                edit={false}
                size={24}
                isHalf={true}
                value={5}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />

              <span className=" w-9 p-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                5
              </span>
            </div>
            <div className="card-actions"></div>
          </div>
        </div>
        {/* 3rd */}
        <div className="card card-compact mb-10 w-96 bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500 shadow-xl hover:bg-pink-100 hover:shadow-pink-500  mx-auto">
          <figure>
            <img
              className="w-56 h-46 mt-5"
              src="https://i.ibb.co/MgQxg8M/sport-car-toy-12456033-removebg-preview-1.png"
              alt=""
            />
          </figure>
          <div className="card-body bg-gradient-to-r rounded-lg from-indigo-300 via-purple-300 to-pink-300 ">
            <h2 className="card-title font-bold text-black">Modern car</h2>
            <h2 className="  text-black font-bold">Top Ranking Car</h2>
            <p className="font-medium text-black">
              Under the hood, modern cars feature efficient and powerful engines
              that deliver a balance of performance and fuel economy. Many
              models also offer hybrid or electric powertrain options,
              contributing to a greener and more sustainable driving experience.
            </p>
            <div className="flex mb-3 mt-2">
              <ReactStars
                count={5}
                edit={false}
                size={24}
                isHalf={true}
                value={5}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />

              <span className=" w-9 p-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                5
              </span>
            </div>
            <div className="card-actions"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategory;

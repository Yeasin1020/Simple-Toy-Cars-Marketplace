
import { useState } from "react";

const Gallery = () => {
  const imgs = [
    {
      id: 0,
      value: "https://i.ibb.co/gSp8R0S/16a96fda0b3972083a469b02518009be.jpg",
    },
    {
      id: 1,
      value: "https://i.ibb.co/7QqgNgZ/istockphoto-505237838-612x612.jpg",
    },
    {
      id: 2,
      value: "https://i.ibb.co/gSp8R0S/16a96fda0b3972083a469b02518009be.jpg",
    },
    {
      id: 3,
      value: "https://i.ibb.co/gSp8R0S/16a96fda0b3972083a469b02518009be.jpg",
    },
    {
      id: 4,
      value: "https://i.ibb.co/gSp8R0S/16a96fda0b3972083a469b02518009be.jpg",
    },
    {
      id: 5,
      value: "https://i.ibb.co/gSp8R0S/16a96fda0b3972083a469b02518009be.jpg",
    },
    {
      id: 6,
      value: "https://i.ibb.co/gSp8R0S/16a96fda0b3972083a469b02518009be.jpg",
    },
    {
      id: 7,
      value: "https://i.ibb.co/gSp8R0S/16a96fda0b3972083a469b02518009be.jpg",
    },
    {
      id: 8,
      value: "https://i.ibb.co/gSp8R0S/16a96fda0b3972083a469b02518009be.jpg",
    },
    {
      id: 9,
      value: "https://i.ibb.co/gSp8R0S/16a96fda0b3972083a469b02518009be.jpg",
    },
   
  ];

  const [sliderData, setSliderData] = useState(imgs[0]);

  const handleClickImg = (index) => {
    console.log(index);
    const slider = imgs[index];
    setSliderData(slider);
  };

  return (
    <div className="   mt-8 ">
      <img
        className="text-center mx-auto justify-center lg:h-[500px] lg:w-[800px]"
        src={sliderData.value}
        alt=""
      />
      <div className=" grid grid-cols-3 lg:grid-cols-10">
        {imgs.map((data, i) => (
          <img
            className={`  mx-auto h[70px] w-[100px] hover:shadow-pink-900${sliderData.id==i?" border border-pink-500 rounded-xl hover:shadow-lg": ""}`}
            key={data.id}
            src={data.value}
            onClick={() => handleClickImg(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
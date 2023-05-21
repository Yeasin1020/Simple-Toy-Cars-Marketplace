
import { useState } from "react";

const Gallery = () => {
  
  const imgs = [
    {
      id: 0,
      value: "https://i.ibb.co/Vt5BCMW/little-mclaren-p1tm-electric-car-for-kids-battery-powered-toy-supercar-HTPJD8-removebg-preview.png",
    },
    {
      id: 1,
      value: "https://i.ibb.co/wRyv0gz/2896426-removebg-preview.png",
    },
    {
      id: 2,
      value: "https://i.ibb.co/BKsNvKd/463471-removebg-preview.png",
    },
    {
      id: 3,
      value: "https://i.ibb.co/YN3MxMb/istockphoto-1024366752-170667a-removebg-preview.png",
    },
    {
      id: 4,
      value: "https://i.ibb.co/8KR52QD/20720083-fi5w-xf94-210702-removebg-preview.png",
    },
    {
      id: 5,
      value: "https://i.ibb.co/GCxNLjN/26217328-dtco-qzju-211215-removebg-preview.png",
    },
    {
      id: 6,
      value: "https://i.ibb.co/1dg4GBx/27188653-win8-blt5-220404-removebg-preview.png",
    },
    {
      id: 7,
      value: "https://i.ibb.co/2dtC4Kd/girl-with-red-vintage-convertible-car-1308-111836-removebg-preview.png",
    },
    {
      id: 8,
      value: "https://i.ibb.co/DGLVfV6/Screenshot-2023-05-21-065217-removebg-preview.png",
    },
    {
      id: 9,
      value: "https://i.ibb.co/G25XWNW/Screenshot-2023-05-21-065344-removebg-preview.png",
    },
   
  ];

  const [sliderData, setSliderData] = useState(imgs[0]);

  const handleClickImg = (index) => {
    console.log(index);
    const slider = imgs[index];
    setSliderData(slider);
  };

  return (
    <div>
      <h1 className="text-center font-bold text-[40px]">Toys Gallery</h1>
      <div className="mt-8 ">
      <img
        className="text-center mx-auto justify-center lg:h-[400px] lg:w-[700px]"
        src={sliderData.value}
        alt=""
      />
      <div className="mt-5  p-5 grid grid-cols-3 lg:grid-cols-10">
        {imgs.map((data, i) => (
          <img
            className={` rounded-full  mx-auto h[70px] w-[100px] hover:shadow-pink-900${sliderData.id==i?" border border-pink-500 rounded-xl hover:shadow-lg": ""}`}
            key={data.id}
            src={data.value}
            onClick={() => handleClickImg(i)}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Gallery;
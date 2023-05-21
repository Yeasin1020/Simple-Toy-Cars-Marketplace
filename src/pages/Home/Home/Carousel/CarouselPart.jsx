import Carousel from "nuka-carousel";


const CarouselPart = () => {
  return (
    <div className=" ">
      <Carousel autoplay zoomScale={1}>
        <img className="mx-auto" src="https://i.ibb.co/G25XWNW/Screenshot-2023-05-21-065344-removebg-preview.png" />
        <img className="mx-auto" src="https://i.ibb.co/G25XWNW/Screenshot-2023-05-21-065344-removebg-preview.png" />
        <img className="mx-auto" src="https://i.ibb.co/G25XWNW/Screenshot-2023-05-21-065344-removebg-preview.png" />
        <img className="mx-auto" src="https://i.ibb.co/G25XWNW/Screenshot-2023-05-21-065344-removebg-preview.png" />
        <img className="mx-auto" src="https://i.ibb.co/G25XWNW/Screenshot-2023-05-21-065344-removebg-preview.png" />
      </Carousel>
    </div>
  );
};

export default CarouselPart;

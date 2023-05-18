const HomeSection = () => {
  return (
    <div className="h-[400px]">
      <div
        className=" bg-cover bg-center"
        style={{
          backgroundImage: `url("https://i.ibb.co/njvLH6X/istockphoto-1017309510-612x612.jpg")`,
        }}
      >
        <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) 100%)]">
          <h2 className="text-5xl text-white font-extrabold text-center lg:p-16 leading-relaxed">
            Sale Start Tomorrow <br />
            <span className=" text-orange-500">Maha Discounts</span>
            <br />
            On All Your Favorite
          </h2>
         
        </div>
      </div>
    </div>
  );
};

export default HomeSection;

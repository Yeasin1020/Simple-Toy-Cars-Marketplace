import { handler } from "daisyui";
import { useEffect, useState } from "react";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToysData from "../ToysData/ToysData";

const AllTabs = () => {
  const [toysCars, setToysCar] = useState([]);
  const [activeTab, setActiveTab] = useState("SportsCar");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    fetch(`https://toy-cars-server-three.vercel.app/allToys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => setToysCar(data));
  }, [activeTab]);

  // const result = toysCars?.filter(toysCar => toysCar.category == activeTab);
  // console.log(result)
  return (
    <div>
      <h1 className="text-center font-bold text-[40px] mt-5 mb-5">Toys Category</h1>
      <div className="text-center">
        <button
          onClick={() => handleTabClick("SportsCar")}
          className={`btn border-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 btn-outline text-black m-5${
            activeTab == "SportsCar"
              ? " focus:bg-pink-600 focus:text-white"
              : ""
          }`}
        >
          Sports Car
        </button>
        <button
          onClick={() => handleTabClick("Truck")}
          className={`btn border-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 btn-outline text-black m-5${
            activeTab == "Truck" ? " focus:bg-pink-600 focus:text-white" : ""
          }`}
        >
          Truck
        </button>
        <button
          onClick={() => handleTabClick("PoliceCar")}
          className={`btn border-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 btn-outline text-black m-5${
            activeTab == "PoliceCar"
              ? " focus:bg-pink-600 focus:text-white"
              : ""
          }`}
        >
          Police Cars
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
        {toysCars?.map((toysCar) => (
          <ToysData key={toysCar._id} toysCar={toysCar}></ToysData>
        ))}
      </div>

    </div>
  );
};

export default AllTabs;

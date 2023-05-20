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
    fetch(`http://localhost:5000/allToys/${activeTab}`)
      .then((res) => res.json())
      .then((data) => setToysCar(data));
  }, [activeTab]);

  // const result = toysCars?.filter(toysCar => toysCar.category == activeTab);
  // console.log(result)
  return (
    <div>
      <h1>Toys Category</h1>
      <div className="text-center">
        <button
          onClick={() => handleTabClick("SportsCar")}
          className={`btn border-none bg-pink-200 btn-outline btn-secondary m-5${
            activeTab == "SportsCar"
              ? " focus:bg-pink-600 focus:text-white"
              : ""
          }`}
        >
          Sports Car
        </button>
        <button
          onClick={() => handleTabClick("Truck")}
          className={`btn border-none bg-pink-200 btn-outline btn-secondary m-5${
            activeTab == "Truck" ? " focus:bg-pink-600 focus:text-white" : ""
          }`}
        >
          Truck
        </button>
        <button
          onClick={() => handleTabClick("PoliceCar")}
          className={`btn border-none bg-pink-200 btn-outline btn-secondary m-5${
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

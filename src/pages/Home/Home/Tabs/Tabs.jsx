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
      <div className="text-center">
        <button
          onClick={() => handleTabClick("SportsCar")}
          className={`btn btn-outline btn-secondary m-5${
            activeTab == "SportsCar"
              ? " focus:bg-pink-600 focus:text-white"
              : ""
          }`}
        >
          Sports Car
        </button>
        <button
          onClick={() => handleTabClick("Truck")}
          className={`btn btn-outline btn-secondary m-5${
            activeTab == "Truck" ? " focus:bg-pink-600 focus:text-white" : ""
          }`}
        >
          Truck
        </button>
        <button
          onClick={() => handleTabClick("PoliceCar")}
          className={`btn btn-outline btn-secondary m-5${
            activeTab == "PoliceCar"
              ? " focus:bg-pink-600 focus:text-white"
              : ""
          }`}
        >
          Police Cars
        </button>
      </div>

      <div>
        {toysCars?.map((toysCar) => (
          <ToysData key={toysCar._id} toysCar={toysCar}></ToysData>
        ))}
      </div>

      {/* <Tabs>
        <TabList className="text-center">
          <Tab>Sports Car</Tab>
          <Tab>Truck</Tab>
          <Tab>Mini Police Car</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
      </Tabs> */}
    </div>
  );
};

export default AllTabs;

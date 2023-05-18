import { handler } from "daisyui";
import { useEffect, useState } from "react";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const AllTabs = () => {
  const [sportCars, setSportCars] = useState([]);
  const [truck, setTruck] = useState([]);
  const [policeCar, setPoliceCar] = useState([]);
  const [activeTab, setActiveTab] = useState("SportsCar");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    fetch("ToysSportCar.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <button
          onClick={() => handleTabClick("SportsCar")}
          className={`btn btn-outline btn-secondary m-5${
            activeTab == "SportsCar" ? " focus:bg-pink-600 focus:text-white" : ""
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
            activeTab == "PoliceCar" ? " focus:bg-pink-600 focus:text-white" : ""
          }`}
        >
          Police Cars
        </button>
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

import React, { useEffect, useState } from "react";
import AllToysData from "../AllToysData/AllToysData";
// import SingleToyData from "../SingleToyData/SingleToyData";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [search, setSearch] = useState("");
  // const [modalData, setModalData] = useState({});
  // const [id, setId] = useState([]);
  // console.log(id);

  // const handleModal = async () => {
  //   if (allToys._id === id) {
  //     await setShowModal(true);
  //   }
  // };

  useEffect(() => {
    fetch("https://toy-cars-server-three.vercel.app/allToy")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  const handleSearch = () => {
    fetch(`https://toy-cars-server-three.vercel.app/toysSearchByToyName/${search}`)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  };

  return (
    <div>
      <div className="text-center p-5">
        <input
          onChange={(s) => setSearch(s.target.value)}
          type="text"
          placeholder="Search here"
          className="input mr-5 input-bordered input-secondary w-full max-w-xs"
        />
        <button
          onClick={handleSearch}
          className="btn btn-outline btn-secondary mb-2"
        >
          Search
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Sub-category</th>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            {allToys.slice(0,20).map((allToy, index) => (
              <AllToysData
                key={allToy._id}
                allToy={allToy}
                index={index}
               
              ></AllToysData>
            ))}
          </tbody>
        </table>

      </div>
      {/* <SingleToyData modalData={modalData} setModalData={setModalData}></SingleToyData> */}
    </div>
  );
};

export default AllToys;

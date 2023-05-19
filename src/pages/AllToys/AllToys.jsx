import { useEffect, useState } from "react";
import AllToysData from "../AllToysData/AllToysData";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [search, setSearch] = useState("");
  

  useEffect(() => {
    fetch("http://localhost:5000/allToy")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);
   

  const handleSearch = () => {
	fetch(`http://localhost:5000/toysSearchByToyName/${search}`)
	.then(res => res.json())
	.then(data => setAllToys(data))
  }

  return (
    <div>
		<div className="text-center p-5">
		<input onChange={(s) => setSearch(s.target.value)} type="text" placeholder="Search here" className="input mr-5 input-bordered input-secondary w-full max-w-xs" />
		<button onClick={handleSearch} className="btn btn-outline btn-secondary mb-2">Search</button>
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
          {allToys.map(allToy => <AllToysData key={allToy._id} allToy={allToy}></AllToysData>)}
        </tbody>
        
      </table>
    </div>
	</div>
  );
};

export default AllToys;

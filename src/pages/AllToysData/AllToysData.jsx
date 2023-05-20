import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const AllToysData = ({ allToy, index}) => {
  console.log(allToy);
  const {
    text,
    AvailableQuantity,

    Price,
    _id,
    ToysName,
   

    category,
  } = allToy || {};
  return (
    <tr>
      <th>{index + 1}</th>
      <td className=" font-semibold">{text}</td>
      <td className=" font-semibold">{category}</td>
      <td className=" font-semibold">{ToysName}</td>
      <td className=" font-semibold">{Price}</td>
      <td className=" font-semibold">{AvailableQuantity}</td>
      <th>
        <Link to={`/singleToy/${_id}`}>
          <button
            
            className="btn btn-ghost border hover:border-pink-500 hover:bg-white text-white bg-pink-500 hover:text-black btn-xs"
          >
            View Details
          </button>
        </Link>

        {/* <button
            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => {
              // setShowModal(true)
              handleModal();
              setId(allToy._id);
            }}
          >
            Open regular modal
          </button> */}
      </th>
    </tr>
  );
};

export default AllToysData;

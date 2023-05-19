import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const AllToysData = ({ allToy }) => {
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
      <th></th>
      <td className=" font-semibold">{text}</td>
      <td className=" font-semibold">{category}</td>
      <td className=" font-semibold">{ToysName}</td>
      <td className=" font-semibold">{Price}</td>
      <td className=" font-semibold">{AvailableQuantity}</td>
      <th>
        {/* <button className="btn btn-ghost border hover:border-pink-500 hover:bg-white text-white bg-pink-500 hover:text-black btn-xs">View Details</button> */}
        {/* The button to open modal */}
        <label htmlFor="my-modal-5" className="btn btn-ghost border hover:border-pink-500 hover:bg-white text-white bg-pink-500 hover:text-black btn-xs">
		View Details
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <h3 className="font-bold text-lg">
				{AvailableQuantity}
            </h3>
            <p className="py-4">
              {text}
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal-5" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </th>
    </tr>
  );
};

export default AllToysData;

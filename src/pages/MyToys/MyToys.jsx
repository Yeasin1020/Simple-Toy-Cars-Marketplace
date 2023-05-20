import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import ReactStars from "react-rating-stars-component";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);



  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((result) => result.json())
      .then((data) => setMyToys(data));
  }, [user]);


  const handleDelete = id => {
	console.log(id)
	const proceed = confirm ('are you sure you want to delete')
	if(proceed){
		fetch(`http://localhost:5000/myToyDelete/${id}`, {
			method: 'DELETE',
		})
		.then(res => res.json())
		.then(data => {
			console.log(data);
      if(data.deletedCount> 0){
        alert('deleted successful');
        const remaining = myToys.filter(singleToy => singleToy._id !==
          id)
          setMyToys(remaining)
      }
		})
	}
  }

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Seller Name & Email</th>
            <th>Category</th>
            <th>ToysName</th>
            <th>AvailableQuantity</th>

            <th>Rating & DetailDescription</th>
            <th>Edit</th>
            <th>Delete</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {myToys.map((myToy, index) => (
            <tr key={myToy._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={myToy.Url}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{myToy.text}</div>
                    <div className="text-sm opacity-50">{myToy.email}</div>
                  </div>
                </div>
              </td>
              <td>{myToy.category}</td>
              <td>{myToy.ToysName}</td>
              <td>{myToy.AvailableQuantity}</td>

              <td className="grid grid-cols-1">
                <div>
                  <div className="flex">
                    <ReactStars
                      count={5}
                      edit={false}
                      size={24}
                      isHalf={true}
                      value={myToy.Rating}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />

                    <span className="pl-2 pr-2 pt-2 rounded bg-blue-100 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                      {myToy.Rating}
                    </span>
                  </div>
                </div>
                <div><small className="mr-10">{myToy.DetailDescription}</small></div>
              </td>
              <td>
               <Link to={`/update/${myToy._id}`}> <FaEdit></FaEdit></Link>
              </td>
              <td>
                <button onClick={()=>handleDelete(myToy._id)}><FaRegTrashAlt></FaRegTrashAlt></button>
              </td>
              
            </tr>
          ))}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default MyToys;

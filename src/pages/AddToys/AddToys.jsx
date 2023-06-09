import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { Toaster, toast } from "react-hot-toast";

const AddToys = () => {
  useEffect(()=> {
    document.title = "Toy-car-AddToys"
  },[])
  const { user } = useContext(AuthContext);


  const handleTost = () => {
    return toast.success("Added Successfully", { duration: 3000 });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
	fetch('https://toy-car-server-production.up.railway.app/postToys', {
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(data)
	})
	.then(res => res.json())
	.then(result => {
		console.log(result)
	})
    console.log(data);
  };

  return (
    <div className=" text-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p className="font-bold text-white">Name:</p>
          <input
            className="text-black font-semibold w-96 p-3 rounded-lg border-spacing-3"
            value={`${user?.displayName}`}
            {...register("text")}
          />
        </div>

        <div>
          <p className="font-bold text-white">Email:</p>
          <input
            className="text-black font-semibold w-96 p-3 rounded-lg border-spacing-3"
            value={`${user?.email}`}
            {...register("email")}
          />
        </div>

        <select
          className="text-black font-semibold w-96 p-3 rounded-lg border-spacing-3 mt-4"
          {...register("category")}
        >
          <option value="SportsCar">SportsCar</option>
          <option value="Truck">Truck</option>
          <option value="PoliceCar">PoliceCar</option>
        </select>

        <div>
          <p className="font-bold text-white">PhotoUrl:</p>
          <input
            className="text-black font-semibold w-96 p-3 rounded-lg border-spacing-3"
            placeholder="Photo-Url"
            defaultValue=""
            {...register("Url")}
          />
        </div>

        <div>
          <p className="font-bold text-white">Price:</p>
          <input
            className="text-black font-semibold w-96 p-3 rounded-lg border-spacing-3"
            placeholder="Price"
            defaultValue=""
            {...register("Price")}
          />
        </div>

        <div>
          <p className="font-bold text-white">ToysName:</p>
          <input
            className="text-black font-semibold w-96 p-3 rounded-lg border-spacing-3"
            placeholder="ToysName"
            defaultValue=""
            {...register("ToysName")}
          />
        </div>

        <div>
          <p className="font-bold text-white">Rating:</p>
          <input
            className="text-black font-semibold w-96 p-3 rounded-lg border-spacing-3"
            placeholder="Rating"
            defaultValue=""
            {...register("Rating")}
          />
        </div>

        <div>
          <p className="font-bold text-white">Available quantity:</p>
          <input
            className="text-black font-semibold w-96 p-3 rounded-lg border-spacing-3"
            placeholder="Available quantity"
            defaultValue=""
            {...register("AvailableQuantity")}
          />
        </div>

        <div>
          <p className="font-bold text-white">Detail description:</p>
          <input
            className="text-black font-semibold w-96 p-3 rounded-lg border-spacing-3"
            placeholder="Detail description"
            defaultValue=""
            {...register("DetailDescription")}
          />
        </div>

        <input
          onClick={handleTost}
          className="font-medium w-96 m-5 text-blue-500 transition-colors hover:text-blue-700 btn"
          type="submit"
        />
      </form>
      <Toaster></Toaster>
    </div>
  );
};

export default AddToys;

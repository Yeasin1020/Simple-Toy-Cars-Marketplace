import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { toast } from "react-hot-toast";

const UpdateData = () => {
  const update = useLoaderData();
  const { Price, AvailableQuantity, DetailDescription, _id } = update;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(`https://toy-cars-server-three.vercel.app/update/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    console.log(data);
	if(data.modifiedCount){
		toast.success('success update')
	}
  };

  return (
    <div className=" text-center">
		<ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p className="font-bold text-white">Price:</p>
          <input
            className=" w-96 p-3 rounded-lg border-spacing-3"
            placeholder="Price"
            defaultValue={Price}
            {...register("Price")}
          />
        </div>

        <div>
          <p className="font-bold text-white">Available quantity:</p>
          <input
            className=" w-96 p-3 rounded-lg border-spacing-3"
            placeholder="Available quantity"
            defaultValue={AvailableQuantity}
            {...register("AvailableQuantity")}
          />
        </div>

        <div>
          <p className="font-bold text-white">Detail description:</p>
          <input
            className=" w-96 p-3 rounded-lg border-spacing-3"
            placeholder="Detail description"
            defaultValue={DetailDescription}
            {...register("DetailDescription")}
          />
        </div>

        <input
          className="font-medium w-96 m-5 text-blue-500 transition-colors hover:text-blue-700 btn"
          type="submit"
        />
      </form>
    </div>
  );
};

export default UpdateData;

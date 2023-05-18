const ToysData = ({toysCar}) => {

	const {text, AvailableQuantity, DetailDescription, Price, Rating, ToysName, Url
, category, email, _id	} = toysCar || {};
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category}</h2>
        <p>{DetailDescription}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ToysData;

import React from "react";
import "./card-car-types.css";
const CardCarTypes = (prop) => {
  const { carTypes } = prop;
  return (
    <>
      <div className="TypeCard my-1">
        <div className="textTypeCard">
          <img
            src="https://souq.car/storage/car_bodies/KhIZBFI6HuROkDGKh3Rw6pkZcvOoyg2o7pyCG5Bf.png"
            alt=""
            width={60}
            height={40}
          />
          <p>هاتشباك</p>
        </div>
      </div>
    </>
  );
};
export default CardCarTypes;

import React from "react";
import "./card-car-brands.css";
const CardCarBrands = (prop) => {
    const { carBrand } = prop;
  return (
    <>
      <div className="brandCard my-1">
        <div className="textBrandCard">
          <img
            src="	https://souq.car/storage/car_makers/22.jpg"
            alt=""
            width={60}
            height={40}
          />
          <p> اودي</p>
        </div>
      </div>
    </>
  );
};
export default CardCarBrands;

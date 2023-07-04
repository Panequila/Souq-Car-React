import CarCart from "../../Components/car-cart/car-cart";
import Filter from "../../Components/filter/filter";
import ViewNav from "../../Components/view_nav/view_nav";
import SliderItems from "../../Components/slider/slider";
import NavigationBar from "../../Components/navbar/navbar";
import { Container } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { addCollectionAndDocuments, getCars } from "../../firebase/firebase";
import "./buy-cars.scss";
import CARS_DATA from "../../cars_data";
import { CarContext } from "../../Contexts/car.cotnext";

function BuyCarsPage(props) {
  const cars = [
    {
      id: 1,
      name: "Haval",
      manufactureDate: 2011,
      kilometers: 1000,
      price: 300000,
      location: "القاهره",
    },
    {
      id: 2,
      name: "Haval",
      manufactureDate: 2011,
      kilometers: 1000,
      price: 300000,
      location: "القاهره",
    },
    {
      id: 3,
      name: "Haval",
      manufactureDate: 2000,
      kilometers: 1000,
      price: 300000,
      location: "القاهره",
    },
    {
      id: 4,
      name: "Haval",
      manufactureDate: 1999,
      kilometers: 1000,
      price: 300000,
      location: "القاهره",
    },
    {
      id: 5,
      name: "Haval",
      manufactureDate: 1999,
      kilometers: 1000,
      price: 300000,
      location: "القاهره",
    },
    {
      id: 6,
      name: "Haval",
      manufactureDate: 1999,
      kilometers: 1000,
      price: 300000,
      location: "القاهره",
    },
    {
      id: 7,
      name: "Haval",
      manufactureDate: 1999,
      kilometers: 1000,
      price: 300000,
      location: "القاهره",
    },
    {
      id: 8,
      name: "Haval",
      manufactureDate: 1999,
      kilometers: 1000,
      price: 300000,
      location: "القاهره",
    },
  ];

  // Get the cars context
  const { filteredCars } = useContext(CarContext);

  var localLang = localStorage.getItem("lang");

  // use this whenever you want to add a collection to the database
  // useEffect(() => {
  //   addCollectionAndDocuments("cars", CARS_DATA);
  // }, []);

  // useEffect(() => {
  //   const getCarsMap = async () => {
  //     const carsMap = await getCars();
  //     setCarsMap(carsMap.cars_for_sale);
  //     // console.log(Array.isArray(carsMap.cars));
  //     // console.log(carsMap.cars_for_sale);
  //   };

  //   // Call the asynchronus function
  //   getCarsMap();
  // }, []);

  return (
    <>
      <div className="row container2">
        {/* <SliderItems cart={<SliderCard />} /> */}
        <SliderItems cars={cars} />

        <Filter />
        <div className="col-sm-12 col-lg-9">
          <ViewNav />

          {filteredCars.map((car) => (
            <CarCart key={car.id} car={car} />
          ))}
        </div>
      </div>
    </>
  );
}

export default BuyCarsPage;

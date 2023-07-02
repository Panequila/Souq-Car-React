<<<<<<< HEAD:src/pages/sale_page.js
import CarCart from "../Components/car-cart/car-cart";
import Filter from "../Components/filter/filter";
import ViewNav from "../Components/view_nav/view_nav";
import SliderItems from "../Components/slider/slider";
import NavigationBar from "../Components/navbar/navbar";
import './sale_page.css'
function SalePage(props) {
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

  return (
    <>
      <div className="row container2 ">
        {/* <SliderItems cart={<SliderCard />} /> */}
        <SliderItems cars={cars} />

        <Filter />
        <div className="col-sm-12 col-lg-9">
          <ViewNav />

          {cars.map((car) => (
            <CarCart key={car.id} car={car} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SalePage;
=======
import CarCart from "../../Components/car-cart/car-cart";
import Filter from "../../Components/filter/filter";
import ViewNav from "../../Components/view_nav/view_nav";
import SliderItems from "../../Components/slider/slider";
import NavigationBar from "../../Components/navbar/navbar";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getCars } from "../../firebase/firebase";
import "./buy-cars.scss"

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
  const [carsMap, setCarsMap] = useState([]);

  var localLang = localStorage.getItem("lang");

  useEffect(() => {
    const getCarsMap = async () => {
      const carsMap = await getCars();
      setCarsMap(carsMap.cars_for_sale);
      // console.log(Array.isArray(carsMap.cars));
      // console.log(carsMap.cars_for_sale);
    };

    // Call the asynchronus function
    getCarsMap();
  }, []);

  return (
    <>
      <div className="row container2">
        {/* <SliderItems cart={<SliderCard />} /> */}
        <SliderItems cars={cars} />

        <Filter />
        <div className="col-sm-12 col-lg-9">
          <ViewNav />

          {carsMap.map((car) => (
            <CarCart key={car.id} car={localLang === "ar" ? car.data_ar : car.data_en} />
          ))}
        </div>
      </div>
    </>
  );
}

export default BuyCarsPage;
>>>>>>> 260ad69ab8cd174639900da372d109b30046f877:src/pages/buy-cars/buy-cars.js

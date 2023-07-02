import React, { createContext, useState, useEffect } from "react";
import { getCars } from "../firebase/firebase";

// Create the CarContext
export const CarContext = createContext();

// Create the CarProvider component
export const CarProvider = ({ children }) => {
  const [carsMap, setCarsMap] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [carFilters, setCarFilters] = useState({
    carBodyFilters: [],
  });

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

  useEffect(() => {
    console.log(carFilters.carBodyFilters);
    //console.log(carFilters.carBodyFilters.find(car => console.log(car.name_en)))
    //const x = carsMap.filter((car) => car.carBody === carFilters.carBodyFilters.find((car) => console.log(car.name_en)));

    if (carFilters.carBodyFilters.length !== 0) {
      setFilteredCars(
        carsMap.filter((car) => {
          return carFilters.carBodyFilters.find((carBody) => carBody.name_en === car.carBody);
        })
      );
    } else {
      setFilteredCars(carsMap);
    }

    console.log(filteredCars.length);
    setCarsMap(filteredCars);
    //console.log(x);
  }, [carFilters]);

  // // For Debugging
  // useEffect(() => {
  //   console.log(carsMap);
  // }, [carsMap]);

  return <CarContext.Provider value={{ carsMap, carFilters, setCarFilters, setCarsMap }}>{children}</CarContext.Provider>;
};

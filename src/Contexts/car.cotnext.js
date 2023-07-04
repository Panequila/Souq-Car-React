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
    //console.log(carFilters.carBodyFilters);

    //console.log(carFilters.carBodyFilters.find(car => console.log(car.name_en)))
    //const x = carsMap.filter((car) => car.carBody === carFilters.carBodyFilters.find((car) => console.log(car.name_en)));
    setFilteredCars(carsMap);

    if (carFilters.carBodyFilters.length !== 0) {
      // Assign the filtered results to a new variable
      setFilteredCars( filteredCars.filter((car) => {
        // Use strict equality (===) instead of assignment (=)
        return carFilters.carBodyFilters.find((carBodySelected) => carBodySelected.name_en === car.carBody);
      }));
      //console.log(filteredResults);
    }
    else{
      setCarsMap(carsMap)
    }

    //console.log(filteredCars.length);
    setCarsMap(filteredCars);
    //console.log(x);
  }, [carFilters]);

  useEffect(() => {
    const getCarsMap = async () => {
      const fetchedCars = await getCars();
      setCarsMap(fetchedCars.cars_for_sale);
      setFilteredCars(fetchedCars.cars_for_sale);
      // console.log(Array.isArray(carsMap.cars));
      // console.log(carsMap.cars_for_sale);
    };
    // Call the asynchronus function
    getCarsMap();
  }, []);

  // // For Debugging
  // useEffect(() => {
  //   console.log(carsMap);
  // }, [carsMap]);

  return <CarContext.Provider value={{ filteredCars, carFilters, setCarFilters, setFilteredCars }}>{children}</CarContext.Provider>;
};

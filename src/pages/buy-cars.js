import CarCart from "../Components/car-cart/car-cart";
import Filter from "../Components/filter/filter";
import ViewNav from "../Components/view_nav/view_nav";
import SliderItems from "../Components/slider/slider";
import NavigationBar from "../Components/navbar/navbar";
import { useEffect, useState } from "react";
import { getCars } from "../firebase/firebase";
//import { addCollectionAndDocuments } from "../firebase/firebase";
//import CARS_DATA from "../cars-data";

function BuyCarsPage() {
  const [carsMap, setCarsMap] = useState([]);

  // useEffect(()=>{
  //   addCollectionAndDocuments('cars', CARS_DATA)
  // },[])

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
      <div className="row bg-light">
        <SliderItems cars={carsMap} />

//         <Filter />
//         <div className="col-sm-12 col-lg-9">
//           <ViewNav />

          {Array.isArray(carsMap) && carsMap.map((car) => <CarCart key={car.id} car={car.data_en} />)}
        </div>
      </div>
    </>
  );
}

export default BuyCarsPage;

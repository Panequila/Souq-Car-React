import CarSearch from "../Components/car-search/car-search";
import CarCard from "../Components/car-card/car-card";
import ExploreSection from "../Components/explore-section/explore-section";
import CarSwiper from "../Components/car-swiper/car-swiper";
import Footer from "../Components/footer/footer";
import NavigationBar from "../Components/navbar/navbar";


const MainPage = () => {
 
  const carBrand = [
    { id: 1, name: "Audi", imgUrl: "https://souq.car/storage/car_makers/22.jpg" },
    { id: 1, name: "Audi", imgUrl: "https://souq.car/storage/car_makers/22.jpg" },
    { id: 1, name: "Audi", imgUrl: "https://souq.car/storage/car_makers/22.jpg" },
    { id: 1, name: "Audi", imgUrl: "https://souq.car/storage/car_makers/22.jpg" },
    { id: 1, name: "Audi", imgUrl: "https://souq.car/storage/car_makers/22.jpg" },
    { id: 1, name: "Audi", imgUrl: "https://souq.car/storage/car_makers/22.jpg" },
    { id: 1, name: "Audi", imgUrl: "https://souq.car/storage/car_makers/22.jpg" },
  ];
  const carTypes = [
    { id: 1, name: "Sedan", imgUrl: "https://souq.car/storage/car_bodies/KhIZBFI6HuROkDGKh3Rw6pkZcvOoyg2o7pyCG5Bf.png" },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
  ];
  return (
    <>
      <CarSearch />
      <CarSwiper car={carBrand} />
      <CarSwiper car={carTypes} />
      {/* <SliderTypesItem carTypes={carTypes} /> */}
      <ExploreSection />
      <CarCard />
      <Footer></Footer>
    </>
  );
};
export default MainPage;

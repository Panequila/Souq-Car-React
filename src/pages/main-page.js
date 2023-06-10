import CarSearch from "../Components/car-search/car-search";
import CarCard from "../Components/car-card/car-card";
import ExploreSection from "../Components/explore-section/explore-section";
import SliderBrandsItem from '../Components/slider-brands-car/slider-brands-car';
import SliderTypesItem from '../Components/silder-types-car/silder-types-car';
const MainPage = () => {
  const carBrand =[
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
    {id: 10},
    {id: 11},
    {id: 12},
    {id: 13},
  ];
  const carTypes =[
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
    {id: 10},
    {id: 11},
    {id: 12},
    {id: 13},
  ];
  return (
    <>
      <CarSearch />
      <SliderBrandsItem carBrand={carBrand}/>
      <SliderTypesItem carTypes={carTypes}/>
      <ExploreSection />
      <CarCard />
    </>
  );
};
export default MainPage;

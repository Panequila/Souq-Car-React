import CarCart from "../Components/car-cart/car-cart";
import Filter from "../Components/filter/filter";
import ViewNav from "../Components/view_nav/view_nav";
import SliderItems from "../Components/slider/slider";
import NavigationBar from "../Components/navbar/navbar";
function SalePage(props) {
  const cars = [
    {
      id: 1,
      name: "Haval",
      manufactureDate: 2011,
      kilometers:1000,
      price:300000,
      location:"القاهره"
    },
    {
      id: 2,
      name: "Haval",
      manufactureDate: 2011,
      kilometers:1000,
      price:300000,
      location:"القاهره"
    },
    {
      id: 3,
      name: "Haval",
      manufactureDate: 2000,
      kilometers:1000,
      price:300000,
      location:"القاهره"
    },
    {
      id: 4,
      name: "Haval",
      manufactureDate: 1999,
      kilometers:1000,
      price:300000,
      location:"القاهره"
    },
    {
      id: 5,
      name: "Haval",
      manufactureDate: 1999,
      kilometers:1000,
      price:300000,
      location:"القاهره"
    },
    {
      id: 6,
      name: "Haval",
      manufactureDate: 1999,
      kilometers:1000,
      price:300000,
      location:"القاهره"
    },
    {
      id: 7,
      name: "Haval",
      manufactureDate: 1999,
      kilometers:1000,
      price:300000,
      location:"القاهره"
    },
    {
      id: 8,
      name: "Haval",
      manufactureDate: 1999,
      kilometers:1000,
      price:300000,
      location:"القاهره"
    },
  ];

  return (
    <>
      <NavigationBar></NavigationBar>
      
      <div className="row bg-light">
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

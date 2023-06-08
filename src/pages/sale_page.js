import CarCart from "../Components/car_cart/car_cart";
import Filter from "../Components/filter/filter";
import ViewNav from "../Components/view_nav/view_nav";
import SliderItems from "../Components/slider/slider";

function SalePage(props) {
  const cars = [
    {
      id: 1,
      name: "Haval",
      manufactureDate: 2011,
    },
    {
      id: 2,
      name: "Haval",
      manufactureDate: 2011,
    },
    {
      id: 3,
      name: "Haval",
      manufactureDate: 2000,
    },
    {
      id: 4,
      name: "Haval",
      manufactureDate: 1999,
    },
    {
      id: 5,
      name: "Haval",
      manufactureDate: 1999,
    },
    {
      id: 6,
      name: "Haval",
      manufactureDate: 1999,
    },
    {
      id: 7,
      name: "Haval",
      manufactureDate: 1999,
    },
    {
      id: 8,
      name: "Haval",
      manufactureDate: 1999,
    },
  ];

  return (
    <>
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

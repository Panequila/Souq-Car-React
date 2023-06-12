import CarCart from "../Components/car-cart/car-cart";
import Filter from "../Components/filter/filter";
import ViewNav from "../Components/view_nav/view_nav";
import SliderItems from "../Components/slider/slider";
import { Image } from "react-bootstrap";

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
        <div
        className="w-100 bg-img radius-15 pt-3 pb-3 ps-5 pe-5 pos-relative cover rounded-3"
        style={{
          backgroundImage:"url('https://souq.car/imgs/sub-header.jpg')",
          backgroundrRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '100%',
        }}
        >
        <h1 class="f-medium f-w-800 text-white pos-relative mb-0" style={{textAlign: 'start '}}>
          بيع و شراء السيارات
        </h1>
      </div>
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

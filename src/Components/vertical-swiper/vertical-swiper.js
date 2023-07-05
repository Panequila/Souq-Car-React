import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarCart from "../car-cart/car-cart";
// import './vertical-swiper.css';
export default function VerticalSwiper() {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    arrows: true,
  };

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

        <Slider {...settings}>
          {cars.map((car) => (
            <div className="slide px-4">
              {" "}
              <CarCart key={car.id} car={car} />
            </div>
          ))}
        </Slider>

    </>
  );
}

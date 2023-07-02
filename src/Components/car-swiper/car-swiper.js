import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import CarSwiperChild from "../car-swiper-child/car-brand-swiper-child";


const CarSwiper = (props) => {
  const cars = props.car;
 
  return (
    <>
      <div className="swiperContainer">
        <div style={{ fontSize: 20, marginBottom: 7, fontWeight: "bold" }}></div>
        <Swiper
          modules={[Navigation]}
          navigation
          pagination={{ clickable: true }}
          bosition
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          freeMode={true}
          grabCursor={true}
          breakpoints={{
            400: {
              slidesPerView: 1,
              spaceBetween: 1,
            },
            900: {
              slidesPerView: 2,
              spaceBetween: 1,
            },

            1000: {
              slidesPerView: 4,
              spaceBetween: 1,
            },
            1050: {
              slidesPerView: 5,
              spaceBetween: 1,
            },
          }}
        >
          {cars.map((car) => (
            <SwiperSlide>
              <CarSwiperChild key={car.id} car={car}></CarSwiperChild>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default CarSwiper;

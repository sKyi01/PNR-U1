import { useRef } from "react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination]);
import star from "../assets/star.svg";

function SwiperCarousel({ reviews }) {
  const swiperRef = useRef(null);

  return (
    <div className="mt-12 z-10 flex justify-center items-center flex-col gap-12 bg-reviews pb-44">
      <h4 className="text-4xl tracking-[10px] text-center md:text-left">
        CLIENTS REVIEW
      </h4>
      <p className="text-xl font-bold font-primary">Trust our clients</p>

      <Swiper
        ref={swiperRef}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-full md:w-[500px] md:h-[500px] custom-swiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full md:w-[500px] md:h-[500px] flex flex-col gap-6 md:gap-0 items-center justify-around py-6">
              <img
                src="https://placeholder.co/200x200"
                alt="placeholder"
                className="w-[200px] h-[200px] rounded-full"
              />
              <h5 className="text-3xl font-bold">{review.name}</h5>
              <div className="flex gap-5">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <p className="pb-5 md:pb-0">
                in a piece of classical Latin literature from 45 BC.
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperCarousel;

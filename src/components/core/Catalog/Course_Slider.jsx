import PropTypes from "prop-types";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Course_Card from "./Course_Card";

function Course_Slider({ Courses }) {
  const slidesPerView = Courses.length >= 3 ? 3 : Courses.length; // Adjust per available slides
  const totalSlides = Courses.length;

  // Enable loop only if there are enough slides
  const isLoopEnabled = totalSlides > slidesPerView;

  return (
    <>
      {Courses?.length ? (
        <Swiper
          loop={isLoopEnabled} // Loop mode only if enough slides
          slidesPerView={Math.min(totalSlides, slidesPerView)} // Adjust for the number of slides
          slidesPerGroup={1}
          spaceBetween={10}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          className="max-h-[30rem] pt-8 px-2"
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <Course_Card course={course} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex flex-col sm:flex-row gap-6 ">
          <p className=" h-[201px] w-full rounded-xl skeleton"></p>
          <p className=" h-[201px] w-full rounded-xl hidden lg:flex skeleton"></p>
          <p className=" h-[201px] w-full rounded-xl hidden lg:flex skeleton"></p>
        </div>
      )}
    </>
  );
}

Course_Slider.propTypes = {
  Courses: PropTypes.array,
};

export default Course_Slider;

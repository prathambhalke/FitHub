import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const horizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  const filteredExercisesData = ["back", "shoulders", "legs", "arms"];

  // //commentented because will fetch and use
  // const filteredExercisesData = [...new Set(data.map((item) => item.bodyPart))];

  // console.log(filteredExercisesData);

  return (
    // <div className="w-2/3 util-border m-24">
    //   <div className="flex overflow-x-auto relative">
    //     <div className="flex items-center">
    //       <AiOutlineDoubleLeft className="relative" />
    //     </div>
    //     <div className="grid grid-cols-4 gap-8 p-4">
    //       {" "}
    //       {/* Increase the padding */}
    //       {filteredExercisesData.map((item) => (
    //         <div key={item} className="m-4">
    //           {" "}
    //           {/* Add margin to each card */}
    //           <BodyPart bodyPartItem={item} />
    //         </div>
    //       ))}
    //     </div>
    //     <div className="flex items-center">
    //       <AiOutlineDoubleRight />
    //     </div>
    //   </div>
    // </div>
    <div>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper util-border m-24"
      >
        {filteredExercisesData.map((item) => {
          console.log(item);
          return (
            <SwiperSlide className="util-border" key={item}>
              {item}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default horizontalScrollBar;

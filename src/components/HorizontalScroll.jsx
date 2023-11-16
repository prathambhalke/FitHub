import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const horizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  const filteredExercisesData = [
    {
      category: "back",
      image:
        "https://i.pinimg.com/474x/f0/89/cd/f089cd1e0f570f5f91c55adca2ddf078.jpg",
    },
    {
      category: "shoulders",
      image:
        "https://i.pinimg.com/474x/f0/89/cd/f089cd1e0f570f5f91c55adca2ddf078.jpg",
    },
    {
      category: "legs",
      image:
        "https://i.pinimg.com/474x/f0/89/cd/f089cd1e0f570f5f91c55adca2ddf078.jpg",
    },
    {
      category: "arms",
      image:
        "https://i.pinimg.com/474x/f0/89/cd/f089cd1e0f570f5f91c55adca2ddf078.jpg",
    },
  ];

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
        slidesPerView={3}
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
        className="mySwiper m-24"
      >
        {filteredExercisesData.map((item, index) => (
          <SwiperSlide className="rounded-lg overflow-hidden" key={item}>
            <div className="relative h-full">
              <img
                src={item.image}
                alt="bodyPartIamges"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-60"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10">
                <p className="text-2xl font-bold">{item.category}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default horizontalScrollBar;

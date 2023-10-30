import HomeImg from "../assets/HomeImg.png";

const HomeBanner = () => {
  return (
    <div className="relative sm:flex sm:-top-24 grid grid-rows-2">
      <div style={{ flex: 1 }} className="lg:mt-52 sm:mt-52 ml-11 mt-32">
        <p className="text-themeRed font-semibold text-xl lg:text-xl">
          Fitness Club
        </p>
        <p className="font-bold text-4xl lg:5xl leading-tight my-2 text">
          Sweat, Smile <br /> and Repeat
        </p>
        <p className="text-lg line-clamp-6 mb-3">
          Checkout the most effective exercises
        </p>
        <button className="bg-themeRed hover:bg-blue-700 text-white font-medium font-bold py-1 px-4 rounded">
          Explore Exercises
        </button>
      </div>
      <img src={HomeImg} alt="HomePageBanner" className="w-full sm:w-2/4" />
    </div>
  );
};

export default HomeBanner;

import { Exercises, HomeBanner, SearchExercises } from "./";

const Home = () => {
  return (
    <h1 className="text-3xl font-bold underline">
      <HomeBanner />
      <SearchExercises />
      <Exercises />
    </h1>
  );
};

export default Home;

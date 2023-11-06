import { useState } from "react";
import { Exercises, HomeBanner, SearchExercises } from "./";

const Home = () => {
  const [exercises, setExercises] = useState("all");
  const [bodyPart, setBodyPart] = useState([]);
  return (
    <div>
      <HomeBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={setBodyPart}
      />
    </div>
  );
};

export default Home;

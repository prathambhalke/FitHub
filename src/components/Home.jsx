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
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </div>
  );
};

export default Home;

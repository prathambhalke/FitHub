import { useEffect, useState } from "react";
import { excerciseOptions, fetchData } from "../utils/fetchData";
import { HorizontalScrollBar } from ".";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  // const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  const handleSearch = async () => {
    if (search) {
      const ExcercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        excerciseOptions
      );

      const searchedExercises = ExcercisesData.filter((exercise) => {
        return (
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
        );
      });

      setSearch("");
      setExercises(searchedExercises);
    }
  };

  useEffect(() => {
    const fetchExercises = async () => {
      const bodyParts = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        excerciseOptions
      );

      setBodyParts([...bodyParts]);
    };
    fetchExercises();
  }, []);

  // console.log("excerises", exercises);
  // console.log("bodyParts", bodyPart);

  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-bold text-4xl text-center p-20">
        Awesome Excersices You
        <br />
        Should now
      </p>

      <div className="flex w-full justify-center">
        <input
          type="text"
          placeholder="Search Exercises"
          className="border font-bold rounded h-14 w-3/5 text-center bg-white"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />

        <button
          className="bg-themeRed text-white w-1/6 rounded"
          onClick={() => handleSearch()}
        >
          Search
        </button>
      </div>
      <div className="flex items-center justify-center w-3/4">
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </div>
    </div>
  );
};

export default SearchExercises;

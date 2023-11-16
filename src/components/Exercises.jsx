const Exercises = ({ excercises, setExercises, bodyPart }) => {
  const dummyExcercises = [
    "pullups",
    "DeadLift",
    "dumbells Curl",
    "incline pushups",
    "decline pushups",
    "barbell pullups",
    "thigs",
    "pullups",
    "DeadLift",
    "dumbells Curl",
    "incline pushups",
    "decline pushups",
    "barbell pullups",
    "thigs",
    "pullups",
    "DeadLift",
    "dumbells Curl",
    "incline pushups",
    "decline pushups",
    "barbell pullups",
    "thigs",
  ];

  return (
    <div className="mt-12 p-20">
      <p className="text-5xl">Showing Exercises Results</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 grid-flow-row gap-1 justify-center p-8 md:p-16 lg:p-24 xl:p-28">
        {dummyExcercises.map((item) => {
          return (
            <div
              className="w-48 h-64 rounded-xl bg-gray-800 shadow-md"
              key={item}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Exercises;

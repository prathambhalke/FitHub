import { BodyPart } from "./";
const horizontalScrollBar = ({ data }) => {
  const filteredExercisesData = [...new Set(data.map((item) => item.bodyPart))];

  // console.log(filteredExercisesData);

  return (
    <div>
      {filteredExercisesData.map((item) => {
        return (
          <div key={item}>
            <BodyPart bodyPartItem={item} />
          </div>
        );
      })}
    </div>
  );
};

export default horizontalScrollBar;

const horizontalScrollBar = ({ data }) => {
  const filteredExercisesData = [...new Set(data.map((item) => item.bodyPart))];

  console.log(filteredExercisesData);

  return (
    <div>
      {filteredExercisesData.map((item) => {
        return <p key={item}>{item}</p>;
      })}
    </div>
  );
};

export default horizontalScrollBar;

//commentented because will fetch and use
// const filteredExercisesData = [...new Set(data.map((item) => item.bodyPart))];

// console.log(filteredExercisesData);

import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import BodyPart from "./BodyPart";

const horizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  const filteredExercisesData = ["back", "shoulders", "legs", "arms"];

  return (
    <div className="w-2/3 util-border m-24">
      <div className="flex overflow-x-auto relative">
        <div className="flex items-center">
          <AiOutlineDoubleLeft className="relative" />
        </div>
        <div className="grid grid-cols-4 gap-8 p-4">
          {" "}
          {/* Increase the padding */}
          {filteredExercisesData.map((item) => (
            <div key={item} className="m-4">
              {" "}
              {/* Add margin to each card */}
              <BodyPart bodyPartItem={item} />
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <AiOutlineDoubleRight />
        </div>
      </div>
    </div>
  );
};

export default horizontalScrollBar;

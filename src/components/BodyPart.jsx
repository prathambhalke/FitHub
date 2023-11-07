import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";

const BodyPart = ({ bodyPartItem }) => {
  return (
    <div className="bg-white border rounded-lg shadow-lg w-40 m-6 p-6 flex flex-col items-center ml-8">
      <div className="text-3xl text-gray-800 mb-4">
        <GiGymBag />
      </div>
      <h2 className="text-xl font-semibold">{bodyPartItem}</h2>
    </div>
  );
};

export default BodyPart;

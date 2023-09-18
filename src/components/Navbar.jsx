import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
const Navbar = () => {
  return (
    <div className="flex justify-normal w-screen py-5 pl-5 ">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <div className="flex justify-evenly items-end content w-full md:w-1/6 md:ml-28 ">
        <Link to="/" className="border-b-2 border-b-red-700">
          Home
        </Link>
        <a href="#exercises">Excercises</a>
      </div>
    </div>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
const Navbar = () => {
  return (
    <div className="flex justify-normal py-5 pl-5">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <div className="flex justify-evenly items-end content md:w-1/6 md:ml-28 sm:w-5/12 w-5/6 ">
        <Link to="/" className="border-b-2 border-b-red-700">
          Home
        </Link>
        <a href="#exercises">Excercises</a>
      </div>
    </div>
  );
};

export default Navbar;

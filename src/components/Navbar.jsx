import Logo from "../assets/Logo.png";
const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 font-Navbar text-white">
      <div className="container mx-auto flex justify-start items-center">
        <img src={Logo} alt="Logo" />
        <div className="hidden md:flex space-x-4">
          <p>Home</p>
          <p>Exercises</p>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button */}
          <button className="text-white">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

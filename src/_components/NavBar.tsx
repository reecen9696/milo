import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-8 lg:px-64 py-4 flex items-center justify-center">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex space-x-16 font-archivo text-white text-lg tracking-wide">
        <div>ABOUT US</div>
        <div>TOKEN DETAILS</div>
        <div>HOW TO BUY</div>
      </div>

      {/* Burger Menu Button (Hidden on Large Screens) */}
      <button
        className="lg:hidden flex flex-col space-y-1.5 ml-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Mobile Menu (Visible When isOpen is True) */}
      {isOpen && (
        <div className="lg:hidden absolute top-14 left-0 w-full bg-dark-bgMain flex flex-col items-center space-y-4 py-4 shadow-md font-archivo text-white text-lg tracking-wide">
          <div>ABOUT US</div>
          <div>TOKEN DETAILS</div>
          <div>HOW TO BUY</div>
        </div>
      )}
    </div>
  );
};

export default NavBar;

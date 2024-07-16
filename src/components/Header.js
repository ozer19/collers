import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-amber-50 md:px-20 md:py-6 p-4 shadow-md text-amber-900">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold">Collers</div>

        <ul className="hidden md:flex gap-4 lg:gap-8 font-medium">
          <li>
            <a href="#" className="hover:underline">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Solutions
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Resources
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Log In
            </a>
          </li>
          <li>
            <a
              href="#"
              className="border-2 border-amber-900 px-4 py-2 rounded-lg hover:bg-amber-900 hover:text-white transition duration-300"
            >
              Sign up now
            </a>
          </li>
        </ul>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-amber-900">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden flex flex-col justify-center items-center bg-amber-50 mt-4 space-y-2">
          <a href="#" className="block py-2 hover:underline">
            Products
          </a>
          <a href="#" className="block py-2 hover:underline">
            Solutions
          </a>
          <a href="#" className="block py-2 hover:underline">
            Pricing
          </a>
          <a href="#" className="block py-2 hover:underline">
            Resources
          </a>
          <a href="#" className="block py-2 hover:underline">
            Log In
          </a>
          <a
            href="#"
            className="border-2 border-amber-900 px-4 py-2 rounded-lg hover:bg-amber-900 hover:text-white transition duration-300"
          >
            Sign up now
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;

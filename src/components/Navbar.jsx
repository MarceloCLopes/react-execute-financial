import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  // setting mobile nav
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // // change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  // close menu on click
  const closeMenu = () => setClick(false);

  const menuItemStyles =
    "text-white hover:pb-3 hover:border-b-[3px] hover:border-solid hover:border-b-secondary-color hover:cursor-pointer";
  return (
    <header
      className={
        color
          ? "header header-bg fixed h-[90px] w-full top-0 left-0 z-[1] transition duration-300 ease-in overflow-hidden"
          : "header fixed h-[90px] w-full top-0 left-0 z-[1] transition duration-300 ease-in overflow-hidden"
      }>
      <nav className="navbar flex justify-between items-center max-w-[1240px] m-auto h-full py-0 px-4">
        <Link to="hero" className="logo">
          <img className="w-[250px] h-auto" src={logo} alt="logo" />
        </Link>

        <div className="hamburger hidden" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} color="#ffffff" />
          ) : (
            <FaBars size={30} color="#ffffff" />
          )}
        </div>

        <ul className={click ? "nav-menu active flex" : "nav-menu flex"}>
          <li className="nav-item p-4 font-medium">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={menuItemStyles}
              onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item p-4 font-medium">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={menuItemStyles}
              onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="nav-item p-4 font-medium">
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={menuItemStyles}
              onClick={closeMenu}>
              Testimonials
            </Link>
          </li>
          <li className="nav-item p-4 font-medium">
            <Link
              to="demo"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              className={menuItemStyles}
              onClick={closeMenu}>
              Demo
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

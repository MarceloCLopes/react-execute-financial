import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <div
      id="footer"
      className="footer w-full bg-[#000000] text-[#EEEEEE] py-12 px-4">
      <div className="container max-w-[1240px] m-auto text-center">
        <ul className="flex justify-center gap-8">
          <li className="nav-item p-4">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-white hover:pb-3 hover:border-b-[3px] hover:border-solid hover:border-secondary-color hover:cursor-pointer">
              Home
            </Link>
          </li>
          <li className="nav-item p-4">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-white hover:pb-3 hover:border-b-[3px] hover:border-solid hover:border-secondary-color hover:cursor-pointer">
              About
            </Link>
          </li>
          <li className="nav-item p-4">
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-white hover:pb-3 hover:border-b-[3px] hover:border-solid hover:border-secondary-color hover:cursor-pointer">
              Testimonials
            </Link>
          </li>
          <li className="nav-item p-4">
            <Link
              to="demo"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              className="text-white hover:pb-3 hover:border-b-[3px] hover:border-solid hover:border-secondary-color hover:cursor-pointer">
              Demo
            </Link>
          </li>
        </ul>

        <div className="bottom text-center pt-12">
          <span className="line mb-4"></span>
          <p>2022 Execute, Inc. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

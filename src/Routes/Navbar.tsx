import close from "../images/close.png";
import menu from "../images/menu.png";
import "../App.css";
import { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faCodepen,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Darkmode from "../Components/Darkmode";

interface NavItem {
  title: string;
  id: number;
  path: string;
}
interface icons {
  href: string;
  id: number;
  icon: any;
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navItems: NavItem[] = [
    { title: "Home", id: 1, path: "home" },
    { title: "About", id: 2, path: "about" },
    { title: "Projects", id: 3, path: "project" },
    { title: "Skills", id: 4, path: "skill" },
    { title: "Contact", id: 5, path: "contact" },
  ];
  const socialicons: icons[] = [
    { icon: faGithub, id: 1, href: "https://github.com/shailjayadav30" },
    { icon: faCodepen, id: 2, href: "https://leetcode.com/u/Shailjayadav/" },
    {
      icon: faLinkedinIn,
      id: 3,
      href: "https://www.linkedin.com/in/shailja-yadav-643853252/",
    },
  ];

  return (
    <>
      <div className="z-10 flex justify-between p-6 items-center  shadow-md">
        <div className="logo  text-[#3b393e] capitalize font-bold text-2xl">
          Shailja
        </div>

        {/* DESKTOP NAVBAR */}
        <nav className="sm:flex hidden items-center gap-8">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  duration={500}
                  smooth={true}
                  offset={-70}
                  className="  text-lg hover:text-blue-500 text-[#3b393e] transition duration-300"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <Darkmode />
        </nav>

        {/* MOBILE MENU ICON */}
        <img
          className="h-8 block sm:hidden cursor-pointer"
          onClick={toggleNavbar}
          src={menu}
          alt="menu"
        />

        {/* MOBILE NAVBAR */}
        <nav
          className={`flex flex-col fixed top-0 right-0 h-full w-full transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out sm:hidden bg-[#8E8FFA] shadow-md`}
        >
          <img
            className="h-12 absolute right-12 top-6 cursor-pointer"
            onClick={toggleNavbar}
            src={close}
            alt="close"
          />
          <ul className="flex flex-col pl-12 font-bold text-3xl pt-20 gap-8 mt-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  onClick={toggleNavbar}
                  to={item.path}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-lg text-[#190482] hover:text-blue-500 transition duration-300"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex mt-auto pl-12 gap-6 mb-12">
            {socialicons.map((icon) => (
              <a href={icon.href} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={icon.icon}
                  className="text-white text-2xl"
                />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

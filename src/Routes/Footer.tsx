import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="w-full h-auto py-8 bg-blue-950 flex flex-col items-center text-center">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full max-w-4xl px-4 gap-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Shailja</h1>
          <p className="text-white">Frontend Developer</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="home"
            smooth={true}
            offset={10}
            duration={500}
            className=" text-white hover:underline transition duration-300"
          >
            Home
          </Link>
          <Link
            to="contact"
            smooth={true}
            offset={10}
            duration={500}
            className=" text-white hover:underline transition duration-300"
          >
            Contact
          </Link>
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/shailja-yadav-643853252/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="text-white text-2xl"
            />
          </a>
          <a
            href="https://github.com/shailjayadav30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="text-white text-2xl" />
          </a>
          <a
            href="https://leetcode.com/u/Shailjayadav/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faCodepen} className="text-white text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

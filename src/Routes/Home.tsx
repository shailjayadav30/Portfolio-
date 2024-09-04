import Button from "../Components/Button";
import Navbar from "./Navbar";
import girl from "../images/girl2.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        id="home"
        className="flex  flex-col sm:flex-row justify-center items-center sm:space-x-8 p-4 sm:p-8"
      >
        <img
          className="h-[20rem] w-[20rem]  mb-6 sm:mb-0 object-cover"
          src={girl}
          alt="Girl illustration"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-3xl text-gray-800 sm:text-5xl text-[#] mb-4 font-bold">
            Hi, I am <span className="text-[#7A08FA]"> Shailja Yadav</span>
          </h1>
          <h2 className=" text-gray-800 text-xl mb-4 font-medium">
            Interactive Frontend Developer
          </h2>
          <p className="text-gray-400 mb-6">
            with a passion for crafting dynamic and responsive web experiences.
          </p>
         <Link duration={500}
                  smooth={true}
                  offset={-70} to="about"> 
         <Button text="About Me" />
         </Link>
        </div>
      </div>
    </>
  );
};

export default Home;

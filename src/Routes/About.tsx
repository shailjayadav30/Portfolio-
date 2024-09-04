import Experience from "../Components/Experience";
import girl3 from "../images/girl3.png";

const About = () => {
  return (
    <div
      id="about"
      className=" mt-[8rem]  sm:mb-1 h-[100vh] w-screen sm:flex sm:flex-col items-center justify-center  p-6"
    >
      <h1 className="text-center text-4xl font-bold mb-2 text-gray-900">
        About Me
      </h1>
      <p className="text-center text-xl mb-2 text-gray-600">My Introduction</p>
      <div className="flex flex-col md:flex-row w-full justify-between  items-center">
        <div className="w-full flex items-center justify-between  sm:mb-0">
          <img
            className="w-full sm:h-[30rem] lg:-translate-y-24 object-cover rounded-lg"
            src={girl3}
            alt="Shailja Yadav"
          />
        </div>
        <div className="w-full  mt-2 text-center sm:text-left pb-8">
          <p className=" text-gray-600 text-[13px] sm:text-xl md:text-lg w-full h-full ">
            I'm a Creative Technologist passionate about crafting dynamic and
            responsive web experiences. My journey in web development is fueled
            by a deep curiosity for emerging technologies and a commitment to
            delivering innovative solutions. With hands-on experience in
            building interactive interfaces and a solid foundation in web
            technologies, I'm eager to contribute to impactful projects that
            push the boundaries of what's possible. I'm always on the lookout
            for opportunities that encourage continuous learning and allow me to
            apply my skills in meaningful ways.
          </p>
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default About;

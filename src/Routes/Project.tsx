import Slider from "react-slick";
import Button from "../Components/Button";
import editor from "../images/editor.png";
import dragdrop from "../images/Dragdrop.png";
import bookai from "../images/bookaii.png";
import bmi from "../images/bmi.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = () => {
  const projectItems = [
    {
      title: "Text Editor",
      id: 1,
      liveSite: "https://texteditor-01.netlify.app/",
      alt: "text editor",
      text: "A simple text editor built with React.",
      github: "https://github.com/shailjayadav30/Editor",
      src: editor,
    },
    {
      title: "Drag&Drop",
      id: 2,
      liveSite: "https://dragdropmade.netlify.app/",
      alt: "dragdrop",
      text: "A drag and drop interface made with HTML, CSS, and JavaScript.",
      github: "https://github.com/shailjayadav30/Drag-Drop",
      src: dragdrop,
    },
    {
      title: "Website",
      id: 3,
      liveSite: "https://bookaiwebsite.netlify.app/",
      alt: "bookai website",
      text: "An AI-powered book recommendation website.",
      github: "https://github.com/shailjayadav30/bookaiwebsite",
      src: bookai,
    },
    {
      title: "BMI Calculator",
      id: 4,
      liveSite: "https://health-check00001.netlify.app/",
      alt: "bmi calculator",
      text: "A BMI calculator built with React.",
      github: "https://github.com/shailjayadav30/BmiCalculator",
      src: bmi,
    },
    {
      title: "Login Page",
      id: 5,
      liveSite: "",
      alt: "Login page",
      text: "A simple login page template.",
      github: "",
      src: bmi,
    },
    {
      title: "Todo List",
      id: 6,
      liveSite: "",
      alt: "todo list",
      text: "A basic todo list app.",
      github: "",
      src: bmi,
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex-col h-[100vh]  w-screen translate-y-[22rem] sm:translate-y-[22rem] md:translate-y-[4rem]  p-5 flex justify-center items-center sm:px-[3rem] ">
        <h1
          id="project"
          className="mb-8 sm:mb-12 md:mb-16 text-center text-4xl font-bold  text-gray-900"
        >
          Projects
        </h1>

        <Slider {...settings} className="w-full max-w-[1200px] sm:mt-[1rem]">
          {projectItems.map((item) => (
            <div key={item.id} className="relative">
              <div className="mx-4 h-[15rem] group">
                <img
                  className="w-full rounded-xl h-full transition-all duration-300 ease-in-out group-hover:blur-sm"
                  src={item.src}
                  alt={item.alt}
                />
                <div className="absolute rounded-xl inset-0 mx-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center">
                  <h1 className="text-white text-xl font-bold mb-2">
                    {item.title}
                  </h1>
                  <p className="text-gray-300 p-2 mb-4">{item.text}</p>
                  <div className="flex gap-4">
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button text="Github Link" />
                      </a>
                    )}
                    {item.liveSite && (
                      <a
                        href={item.liveSite}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button text="Live Site" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Project;

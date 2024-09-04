import {
  faLinkedin,
  faSignalMessenger,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Contact = () => {
  return (
    <div id="contact" className="h-[60vh] ">
      <h1 className="text-gray-900 text-4xl text-center">Contact Me</h1>
      <p className="text-gray-600 text-xl text-center">Get in Touch</p>
      <div className="flex flex-col ml-[2rem] sm:ml-[10rem] mt-[5rem] gap-4">
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            icon={faSignalMessenger}
            className="text-[#7A08FA] text-2xl"
          />
          <div>
            <p>Email</p>
            <a href="https://shailjayadav7275@gmail.com" className="text-sm">
              {" "}
              shailjayadav7275@gmail.com
            </a>
          </div>
        </div>
        {/*LINKEDIN*/}

        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-[#7A08FA] text-2xl"
          />
          <div>
            <p>Linkedin</p>
            <a
              href="https://www.linkedin.com/in/shailja-yadav-643853252/"
              className="text-sm"
            >
              @Shailja Yadav
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

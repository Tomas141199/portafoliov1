import { WavyText, Button } from "../";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div>
      <div className="mb-4">
        <WavyText
          content="Hi, my name is"
          className="duration-75 text-4xl font-normal text-primary-green"
        />

        <WavyText
          content="Tomas Garcia"
          className="duration-75 text-6xl font-bold"
        />
        <WavyText
          content="Software Engineer"
          className="duration-75 text-5xl text-blue-font font-bold"
        />
      </div>
      <div className="my-6">
        <p className="text-gray-font text-md w-11/12 sm:w-80">
          I am a software engineer passionate about new technologies. I love web
          and software development.
        </p>
      </div>

      <Link activeClass="active" smooth spy to="contact">
        Contact me
      </Link>
    </div>
  );
};

export default Hero;

import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

export const Home = () => {
  return (
    <section
      id="home"
      className="sm:min-h-[90vh] w-[100%]  flex  flex-col p-0 m-0 bg-[royalblue] justify-between items-center relative min-h-[60vh] "
    >
      <div className="sm:min-h-[20vh] w-[100%] text-center flex items-center justify-center flex-col sm:top-5  sm:mt-32 absolute top-20 h-[max-content]">
        <span className="sm:text-5xl sm:text-white sm:font-bold sm:font-sans text-3xl text-white font-bold font-sans">
          Mobile Developer,Web Developer, Blockchain Enthusiast.
        </span>
        <div className="sm:flex sm:w-[25%] sm:h-[5vh]  sm:justify-around sm:items-center sm:text-2xl sm:text-white sm:mt-10 w-[35%] h-[5vh] justify-around flex items-center text-2xl mt-5 ">
          <a href="https://www.linkedin.com/in/prabeshbista/" target="_blank">
            <BsLinkedin className="sm:cursor-pointer text-white transition-all  hover:text-white sm:hover:scale-[1.5] " />
          </a>
          <a href="https://github.com/PrabeshPP" target="_blank">
            <BsGithub className="cursor-pointer transition-all text-white hover:text-white sm:hover:scale-[1.5] " />
          </a>
          <a href="https://twitter.com/Prabeshbista9" target="_blank">
            <BsTwitter className="cursor-pointer transition-all text-white hover:text-white sm:hover:scale-[1.5] " />
          </a>
        </div>
        <div className="sm:h-[8vh] sm:w-[2%]  sm:mt-5 border-2 rounded-full flex items-center justify-center h-[8vh] w-[8%] mt-5">
          <div className="h-2 w-2 bg-white  rounded-full animate-boucning-circle"></div>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
        className="sm:h-[35vh] w-[100%] h-[10vh] absolute bottom-[-1px]"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,192L60,176C120,160,240,128,360,138.7C480,149,600,203,720,234.7C840,267,960,277,1080,261.3C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

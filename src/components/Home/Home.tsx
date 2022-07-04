import React from "react";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

export const Home = () => {
    return (
        <div className="min-h-[90vh] w-[100%]  flex  flex-col p-0 m-0 bg-green-500 justify-between items-center">
            <div className="min-h-[20%] w-[60%] text-center flex items-center justify-center flex-col  mt-32" >
                <span className="text-5xl text-white font-bold font-sans">
                    Mobile Developer,Web Developer, Blockchain Enthusiast.
                </span>
                <div className="flex w-[25%] h-[5vh]  justify-around items-center text-2xl text-white mt-10 ">
                    <BsLinkedin className="cursor-pointer transition-all hover:text-[royalblue] hover:scale-[1.5] " />
                    <BsGithub className="cursor-pointer transition-all hover:text-[royalblue] hover:scale-[1.5] " />
                    <BsTwitter className="cursor-pointer transition-all hover:text-[royalblue] hover:scale-[1.5] " />
                </div>
                <div className="h-[6vh] w-[3%]  mt-5 border-2 rounded-full flex items-center justify-center ">
                    <div className="h-2 w-2 bg-white  rounded-full animate-bounce">
                    </div>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 320" className="h-[25vh] w-[100%]">
                <path fill="crimson" fill-opacity="1" d="M0,96L34.3,85.3C68.6,75,137,53,206,80C274.3,107,343,181,411,192C480,203,549,149,617,144C685.7,139,754,181,823,208C891.4,235,960,245,1029,213.3C1097.1,181,1166,107,1234,74.7C1302.9,43,1371,53,1406,58.7L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            </svg>


        </div>
    );
};
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";

const Footer = () => {
    const date:Date=new Date;
    let dateYear=date.getFullYear()
  return (
    <section className="sm:h-[20vh] min-h-[20vh] w-[100%] bg-[royalblue] flex items-center justify-around sm:flex-row flex-col">
    <div className="h-[80%] sm:w-[20%] w-[90%] flex flex-col ml-5 items-center">
      <h1 className="text-2xl font-extrabold font-neucha pt-5 text-white">
        Prabesh
      </h1>
      <p className="text-white font-medium">&copy; {dateYear} all rights reserved</p>
    </div>
    <div className="h-[80%] sm:w-[20%] w-[90%] flex flex-col items-center ">
      <h1 className="text-2xl font-bold text-white font-neucha pt-5">
        Social Media
      </h1>
      <div className="flex w-[80%] h-max  justify-around items-center text-xl text-whit mt-2">
        <a href="https://www.linkedin.com/in/prabeshbista/" target="_blank"><BsLinkedin className="cursor-pointer text-white transition-all  hover:text-white hover:scale-[1.2] " /></a>
          <a href="https://github.com/PrabeshPP" target="_blank"><BsGithub className="cursor-pointer transition-all text-white hover:text-white hover:scale-[1.2] " /></a>
        <a href="https://twitter.com/Prabeshbista9" target="_blank"><BsTwitter className="cursor-pointer transition-all text-white hover:text-white hover:scale-[1.2] " /></a>
      </div>
    </div>
    <div className="h-[80%] sm:w-[40%] w-[90%] flex justify-center items-center sm:mb-0 mb-5 sm:text-left text-center">
    <h1 className="text-2xl font-extrabold font-neucha pt-5 text-white">
        Made with ❤️ by Prabesh Bista.
      </h1>
    </div>
  </section>
  )
}

export default Footer
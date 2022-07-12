import React from "react";

const Contacts: React.FC = () => {
  const date: Date = new Date();
  let dateYear = date.getFullYear();

  return (
    <form id="contacts" className="min-h-[60vh] w-[100%] bg-[#4169e1a2] flex flex-col items-center ">
      <div className="min-h-[30vh] w-[100%] flex sm:flex-row flex-col items-center justify-around  mt-10 box-border">
        <div className="h-[30vh] sm:w-[55%] w-[90%]  flex flex-col ">
          <div className="flex sm:h-[40%] h-[60%] w-[100%] items-center  sm:flex-row flex-col box-border">
            <input
              placeholder="Full Name"
              type="text"
              className="sm:ml-10 sm:mt-0  outline-none h-[60%] sm:w-[40%] w-[100%] focus:border-2 focus:border-black pl-5"
            />
            <input
              placeholder="Email"
              type="email"
              className="outline-none  sm:ml-10 sm:mt-0 mt-6  h-[60%] sm:w-[40%] w-[100%] focus:border-2 focus:border-black pl-5"
            />
          </div>
          <input
            placeholder="Subject"
            className="h-[30%] sm:w-[86%] outline-none focus:border-2 focus:border-black sm:ml-10 mr-10 mt-5 pl-5 w-[100%]"
          />
        </div>
        <div className="flex justify-around sm:w-[35%] w-[90%] min-h-[25vh] sm:mt-0 mt-5 ">
          <textarea
            className="resize  outline-none focus:border-2 focus:border-black pl-5 w-[100%] "
            name="message"
            placeholder="You Message"
            cols={50}
          ></textarea>
        </div>
       
      </div>
      <button className="w-[90%] h-[10vh]  transition-colors bg-red-500 mt-5 mb-5 text-white text-xl font-bold shadow-lg shadow-[#00000082] hover:bg-green-500 hover:shadow-2xl hover:shadow-[#00000082]">Send</button>
    </form>
  );
};

export default Contacts;

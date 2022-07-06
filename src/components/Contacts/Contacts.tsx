import React from "react";

const Contacts: React.FC = () => {
  const date: Date = new Date();
  let dateYear = date.getFullYear();

  return (
    <form id="contacts" className="min-h-[60vh] w-[100%] bg-[#4169e1a2] flex flex-col items-center ">
      <div className="min-h-[30vh] w-[100%] flex items-center justify-around  mt-10">
        <div className="h-[30vh] w-[55%]   flex flex-col ">
          <div className="flex h-[40%] w-[100%] items-center">
            <input
              placeholder="Full Name"
              type="text"
              className="ml-10 outline-none h-[60%] w-[40%] focus:border-2 focus:border-black pl-5"
            />
            <input
              placeholder="Email"
              type="email"
              className="outline-none  ml-10  h-[60%] w-[40%] focus:border-2 focus:border-black pl-5"
            />
          </div>
          <input
            placeholder="Subject"
            className="h-[30%] w-[86%] outline-none focus:border-2 focus:border-black ml-10 mr-10 mt-5 pl-5"
          />
        </div>
        <div className="flex justify-around w-[35%] min-h-[25vh] ">
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

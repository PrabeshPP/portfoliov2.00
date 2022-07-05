import React from "react";

const Contacts: React.FC = () => {
  const date: Date = new Date();
  let dateYear = date.getFullYear();

  return (
    <form className="min-h-[60vh] w-[100%] bg-[#4169e1a2] flex items-center justify-around">
      <div className="h-[30vh] w-[55%]   flex flex-col ">
        <div  className="flex h-[40%] w-[100%] items-center">
          <input placeholder="Full Name" type="text" className="ml-10  h-[60%] w-[40%]" />
          <input placeholder="Email" type="text" className="ml-10  h-[60%] w-[40%]" />
        </div>
        <input  placeholder="Subject" className="h-[10vh] w-[86%] outline-none focus:border-2 focus:border-black ml-10 mr-10 mt-5" />
      </div>
      <div className="flex justify-around w-[35%] ">
        <textarea
          className="resize  outline-none focus:border-2 focus:border-black"
          name="message"
          placeholder="You Message"
          rows={3}
          cols={30}
        ></textarea>
      </div>
    </form>
  );
};

export default Contacts;

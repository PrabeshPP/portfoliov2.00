import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from '../../configuration/firebaseConfig';

const Contacts: React.FC = () => {

  const [name,setName]=useState<string>("");
  const [email,setEmail]=useState<string>("");
  const [subject,setSubject]=useState<string>("");
  const [message,setMessage]=useState<string>("");
 

  
  const submitData=async(e:any)=>{
    e.preventDefault();
    
    const contactsRef=collection(db,"Contacts","contact");
    if(name.trim().length===0 && email.trim().length===0 && subject.trim().length===0 && message.trim().length===0){
        return ;
    }
   
    await addDoc(contactsRef,{
        "Full Name":name,
        "email":email,
        "subject":subject,
        "message":message
    });

    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
  }

  return (
    <form id="contacts" className="min-h-[60vh] w-[100%] bg-[#4169e1a2] flex flex-col items-center " onSubmit={submitData}>
      <div className="min-h-[30vh] w-[100%] flex sm:flex-row flex-col items-center justify-around  mt-10 box-border">
        <div className="h-[30vh] sm:w-[55%] w-[90%]  flex flex-col ">
          <div className="flex sm:h-[40%] h-[60%] w-[100%] items-center  sm:flex-row flex-col box-border">
            <input
              value={name}
              onChange={
                (value)=>{
                  setName(value.target.value);
                }
              }
              name="fullname"
              placeholder="name"
              type="text"
              className="sm:ml-10 sm:mt-0  outline-none h-[60%] sm:w-[40%] w-[100%] focus:border-2 focus:border-black pl-5"
            />
            <input
            value={email}
             onChange={
              (value)=>{
                setEmail(value.target.value);
              }
            }
            name="email"
              placeholder="Email"
              type="email"
              className="outline-none  sm:ml-10 sm:mt-0 mt-6  h-[60%] sm:w-[40%] w-[100%] focus:border-2 focus:border-black pl-5"
            />
          </div>
          <input
          value={subject}
           onChange={
            (value)=>{
              setSubject(value.target.value);
            }
          }
          name="subject"
            placeholder="Subject"
            className="h-[30%] sm:w-[86%] outline-none focus:border-2 focus:border-black sm:ml-10 mr-10 mt-5 pl-5 w-[100%]"
          />
        </div>
        <div className="flex justify-around sm:w-[35%] w-[90%] min-h-[25vh] sm:mt-0 mt-5 ">
          <textarea
          value={message}
           onChange={
            (value)=>{
              setMessage(value.target.value);
            }
          }
            className="resize  outline-none focus:border-2 focus:border-black pl-5 w-[100%] "
            name="message"
            placeholder="You Message"
            cols={50}
          ></textarea>
        </div>
       
      </div>
      <button className={`w-[90%] h-[10vh]  transition-colors bg-red-500 mt-5 mb-5 text-white text-xl font-bold shadow-lg shadow-[#00000082] hover:bg-green-500 hover:shadow-2xl hover:shadow-[#00000082]`}>Send</button>
    </form>
  );
};

export default Contacts;

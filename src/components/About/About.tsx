import React, { useCallback, useEffect, useState } from 'react'
import profilePic from "../../Assets/profile.jpg";
import {db} from "../../configuration/firebaseConfig";
import { collection,getDocs } from 'firebase/firestore';
import { Description } from '../../model/description';
import { Framework, Skill } from '../../model/skills.';


const About = () => {
  const [intro,setIntro]=useState<Description[]>([]);
  const [skills,setSkills]=useState<Skill[]>([]);
  const [frameworks,setFrameworks]=useState<Framework[]>([]);


  //fetching introduction
  const fetch:()=>Promise<void>=async()=>{
    const introCollection=collection(db,"introduction");
    const introSnapShot=await getDocs(introCollection);

    const desc=introSnapShot.docs.map((doc)=>(
      {
        id:doc.id,
        header:doc.data().heading,
        paragraph:doc.data().p1,
      }
    ));

    setIntro(desc);
  
  }

  //fetching skills from firebase

  const fetchSkills=useCallback(async()=>{
    const skillsCollection=collection(db,"skills");
    const skillsSnapShot=await getDocs(skillsCollection);
    const skillsFirebase=skillsSnapShot.docs[0].data().Skills;
    const frameworksFirebase=skillsSnapShot.docs[0].data().Frameworks;

    setSkills(skillsFirebase);
    setFrameworks(frameworksFirebase);

  },[])

  useEffect(()=>{
      fetch();
      fetchSkills();

  },[fetchSkills])

  return (
    <section id='about' className='min-h-[80vh] w-[100%] flex flex-col items-center ' >

          {/* <h1 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-[crimson] border-b-4 border-black'>About</h1> */}


          <div className='sm:h-[90%] sm:w-[90%] flex items-center sm:justify-around sm:mt-10 sm:flex-row flex-col  min-h-[60vh]' >
          <img src={profilePic} alt="Profile Pic" className='sm:h-[50vh] sm:w-[30%] object-fill rounded-lg shadow-2xl shadow-[#000000] h-[35vh]  w-[70%] sm:mt-0 mt-20'/>

          {/* 
            description for the about section 
            this description is fetched from the firebase firestore.
            So,it might take some moment to load the data.
          */}
          <div className='sm:h-[60vh] sm:w-[60%] text-center flex flex-col justify-center items-center w-[90%] mt-10 min-h-max' >
              {
                intro.length===0? <div className='h-16 w-16 animate-spin bg-transparent rounded-full border-t-2 border-r-2 border-[crimson]'>
                
                </div>  :intro.map(desc=>{
                  return <div className='h-[80%] w-[100%] flex flex-col justify-center items-center' key={desc.id}>
                     <h1 className='text-3xl font-bold text-black'>{desc.header}</h1>
                      <p className='sm:text-md font-semibold mt-5 text-lg'>{desc.paragraph}</p>
                  </div>
                })
              }
              <div className='sm:h-[20%] sm:w-[70%]  w-[80%] h-[6vh] items-center flex justify-around sm:mt-0 mt-5'>
              <a href='https://github.com/PrabeshPP' target="_blank" className='sm:h-[70%] sm:w-[40%] h-[80%] w-[40%] bg-[crimson] mb-2 rounded-full text-white font-bold shadow-lg shadow-black  transition-colors sm:hover:bg-green-500'><button className=' h-[100%] w-[100%]  '>GitHub</button></a>
              <a href='https://drive.google.com/file/d/1d_Nwg_XzeZN2sIibLOWSCX1qP754S2vU/view?usp=sharing' className='h-[80%] w-[40%] sm:h-[70%] sm:w-[40%] mb-2 rounded-full bg-[crimson] text-white font-bold shadow-lg shadow-black  transition-colors sm:hover:bg-green-500' target="_blank"><button className=' h-[100%] w-[100%] '>My CV</button></a>
              </div>
          </div>


          </div>
          {
                /* 
                Skills Section to showcase my skills.
                These Skills section data is also being fetched from the firebase flutter 
                to add  the skills in future.
                
                */
              }


              <div className='min-h-[70vh] w-[90%]  mt-32 mb-5 flex flex-col items-center'>
                  <h1 className='text-xl font-bold text-black font-neucha'>Programming Languages I Use 🤖</h1>
                  <div className='sm:h-[70vh] min-h[70vh] sm:w-[60%] w-[90%] flex items-center justify-around flex-wrap'>
                    {
                      skills.length==0?<div className='h-16 w-16 animate-spin bg-transparent rounded-full border-t-2 border-r-2 border-black'>

                      </div>:

                      skills.map((skill)=>{
                        return <div key={skill.skill} className="sm:h-[25%] sm:w-[25%] h-[15vh] w-[35%] bg-white shadow-md shadow-[#1c19195d] m-5 flex items-center justify-around hover:shadow-lg hover:shadow-[#00000075] hover:cursor-pointer">
                          <img src={skill.iconURL} alt={skill.skill} className="h-[80%] w-[80%] object-contain"/>
                          
                          </div>
                      })
                    }
                  </div>
                  <h1 className='text-xl font-bold text-black mt-12 font-neucha'>Frameworks & Tools 👾</h1>
                  <div className='sm:h-[70vh] sm:w-[60%] min-h-[70vh] w-[90%] flex items-center justify-around flex-wrap'>
                    {
                      frameworks.length==0?<div className='h-16 w-16 animate-spin bg-transparent rounded-full border-t-2 border-r-2 border-black'>
                      </div>:frameworks.map((framework)=>{
                        return <div key={framework.framework} className="sm:h-[25%] sm:w-[25%] h-[15vh] w-[35%] bg-white shadow-md shadow-[#1c19196e] m-5 flex items-center justify-around hover:shadow-lg hover:shadow-[#00000075] hover:cursor-pointer">
                          <img src={framework.iconURL} alt={framework.framework} className="h-[80%] w-[90%] object-contain"/>
                          </div>
                      })
                    }
                  </div>
              </div>
    </section>
  )
}

export default About
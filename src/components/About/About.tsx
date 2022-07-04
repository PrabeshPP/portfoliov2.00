import React, { useCallback, useEffect, useState } from 'react'
import profilePic from "../../Assets/profile.jpg";
import {db} from "../../configuration/firebaseConfig";
import { collection,getDoc,getDocs } from 'firebase/firestore';
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

  },[])

  return (
    <div className='min-h-[80vh] w-[100%] flex flex-col items-center ' >
          <h1 className='text-5xl font-bold'>
            <span className='text-[crimson]'>Ab</span>
            <span className='text-[blue]'>out</span>
            
            </h1>
          <div className='h-[90%] w-[90%] flex items-center justify-around mt-10' >
          <img src={profilePic} alt="Profile Pic" className='h-[50vh] w-[30%] object-fill rounded-lg shadow-2xl shadow-[#000000]'/>

          {/* 
            description for the about section 
            this description is fetched from the firebase firestore.
            So,it might take some moment to load the data.
          */}
          <div className='h-[60vh] w-[60%] text-center flex flex-col justify-center items-center ' >
              {
                intro.length==0? <div className='h-16 w-16 animate-spin bg-transparent rounded-full border-t-2 border-r-2 border-[crimson]'>
                
                </div>  :intro.map(desc=>{
                  return <div className='h-[100%] w-[100%] flex flex-col justify-center items-center' key={desc.id}>
                     <h1 className='text-3xl font-bold text-green-500'>{desc.header}</h1>
                      <p className='text-md font-semibold mt-5'>{desc.paragraph}</p>
                  </div>
                })
              }
          </div>

          </div>
          {
                /* 
                
                Skills Section to showcase my skills.
                These Skills section data is also being fetched from the firebase flutter 
                to add  the skills in future.
                
                */
              }


              <div className='h-[70vh] w-[90%]  mt-12 mb-5 flex flex-col items-center'>
                      <div className='h-[50vh] w-[60%] bg-red-500'>
                            
                      </div>
              </div>
    </div>
  )
}

export default About
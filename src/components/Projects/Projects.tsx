import React, { useCallback, useEffect, useState } from 'react'
import {collection,getDocs} from "firebase/firestore";
import { db } from '../../configuration/firebaseConfig';
import { Project } from '../../model/description';

const Projects = () => {

    const[projects,setProjects]=useState<Project[]>([]);

    const fetchProjects=useCallback(async()=>{
      const projectsCollection=collection(db,"Projects");
      const projectsSnapShot=await getDocs(projectsCollection);
      const projectsData=projectsSnapShot.docs[0].data().Projects;
      setProjects(projectsData);
    },[])

    useEffect(()=>{
      fetchProjects();
    },[])



  return (
    <section id='projects' className='min-h-[40vh] w-[100%] flex flex-col items-center'>
      <h1 className='text-3xl font-bold mt-20'>Some of my Works</h1>
      <div className='min-h-[20vh] w-[95%] flex flex-wrap items-center  mt-10 mb-5'>
          {
            projects.length==0?<div className='h-16 w-16 animate-spin bg-transparent rounded-full border-t-2 border-r-2 border-black'>

            </div>:

            projects.map((project)=>{
              return <a className='h-[60vh] w-[30%] bg-white m-5 rounded-2xl shadow-md shadow-[#241f1f7b] hover:shadow-xl hover:shadow-[#241f1f7b]' href={project.projectLink} key={project.id} target="_blank">
                <div className='h-[100%] w-[100%] flex flex-col items-center '   >
                    <img src={project.projectURL} alt={project.name} className='h-[60%] w-[100%] object-cover rounded-t-2xl'/>
                    <h1 className='text-xl font-neucha font-extrabold mt-4'>{project.name}</h1>
                    <span className='mt-4 text-md font-bold'>{project.techStack}</span>
                </div>
              </a>
            })
          }
      </div>
    </section>
  )
}

export default Projects; 
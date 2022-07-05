import React, { useCallback, useEffect, useState } from 'react'
import { getDocs,collection } from 'firebase/firestore'
import { db } from '../../configuration/firebaseConfig';
import { Service } from '../../model/description';

const Services = () => {
    const [services,setServices]=useState<Service[]>([]);

    const fetchServices=useCallback(async()=>{
        const serviceCollection=collection(db,"Services");
        const servicesSnapshot=await getDocs(serviceCollection);
        const servicesData=servicesSnapshot.docs[0].data().Services;
          console.log()
        const servicesDataSorted=servicesData.sort((service1:Service,service2:Service)=>{
            return service1.id-service2.id;
        });

        setServices(servicesDataSorted);
    },[])

    useEffect(()=>{
        fetchServices();
    },[])

  return (
    <div className='min-h-[80vh] w-[100%] bg-[royalblue] flex flex-col justify-start items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 320" className='h-[35vh] w-[100%]'>
        <path fill="#fff" fillOpacity="1" d="M0,128L60,106.7C120,85,240,43,360,42.7C480,43,600,85,720,122.7C840,160,960,192,1080,197.3C1200,203,1320,181,1380,170.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
      </svg>
        <h1 className='text-4xl font-bold text-white'>Services</h1>
        <div className='min-h-[80vh] w-[95%] mt-10 flex flex-wrap items-center justify-center'>
            {
                services.length==0?<div className='h-16 w-16 animate-spin bg-transparent rounded-full border-t-2 border-r-2 border-white'>

                </div>:services.map((service)=>{
                  return <div className='min-h-[50vh] w-[33%] flex flex-col items-center transition-colors bg-white m-5 rounded-xl shadow-xl shadow-[#241f1f7b] cursor-pointer hover:shadow-2xl hover:shadow-[#000000b5] hover:bg-[crimson] hover:text-white' key={service.id}>
                      <img src={service.iconURL} alt={service.service} className="h-[60px] w-[60px] mt-5 "/>
                      <h1 className='text-xl font-bold mt-5'>{service.service}</h1>
                      <p className='w-[90%] text-md font-medium mt-5 mb-5'>{service.description}</p>
                  </div>
                })
            }
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 320" className="h-[35vh] w-[100%]">
            <path fill="#fff" fillOpacity="1" d="M0,192L60,176C120,160,240,128,360,138.7C480,149,600,203,720,234.7C840,267,960,277,1080,261.3C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
    </div>
  )
}

export default Services
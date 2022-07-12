import React, { useState } from 'react'

const Header:React.FC = () => {
  const [clicked,setOnClicked]=useState(false);
  const onClickHandler=()=>{
    setOnClicked(!clicked);
  }



  return (
    <section className='sm:h-[10vh] sm:w-[100%] sm:bg-white sm:flex sm:flex-row sm:justify-between sm:shadow-header-shadow sm:sticky sm:top-0 sm:z-10 flex flex-col items-center justify-between  sticky top-0 z-10 transition-all  h-max  shadow-md shadow-[#00000057]'>
        <div className='sm:h-[100%] sm:w-[20%] sm:flex sm:items-center sm:justify-start sm:select-none sm:box-border w-[100%] h-[10vh]  flex items-center justify-between'>
            <h1 className='text-2xl font-extrabold font-neucha ml-5 '>
                Pra<span className='text-[crimson]'>besh</span>
                </h1>
                <button className='sm:hidden mr-2' onClick={onClickHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
        </button>
        </div>
        
        <div className={`${clicked==true?"flex":"hidden"} flex-col sm:flex-row  sm:flex sm:items-center sm:h-[100%] sm:w-[60%] sm:justify-end  w-[100%] h-[40vh] `}>
            <ul className='sm:h-[100%] sm:w-[75%] sm:flex sm:flex-row sm:justify-around sm:items-center flex flex-col  font-bold uppercase justify-around w-[100%] h-[80%]'>
               <li onClick={onClickHandler}><a href='#home' className='sm:cursor-pointer sm:hover:text-green-500 px-5 '>Home</a></li>
               <li onClick={onClickHandler}><a href='#about' className='sm:cursor-pointer sm:hover:text-green-500 px-5'>About</a></li> 
               <li onClick={onClickHandler}><a href='#projects'  className='sm:cursor-pointer sm:hover:text-green-500 px-5'>Projects</a></li>
               <li onClick={onClickHandler}><a href='#services' className='sm:cursor-pointer sm:hover:text-green-500 px-5'>Services</a></li>  
            </ul>
            <a onClick={onClickHandler} href='#contacts' className='sm:h-[70%] sm:w-[20%] sm:mr-5 h-[20%] w-[40%] mx-5 my-5 rounded-full'><button className='h-[100%] w-[100%] bg-red-600 outline-none rounded-full sm:hover:bg-green-500 text-lg font-bold text-white shadow-md shadow-[#00000097]'>Contact me</button></a>
        </div>
        
    </section>
  )
}

export default Header;

/* 
dark:bg-black
dark:text-white
dark:text-white

dark:hover:text-green-400
dark:hover:text-green-400
dark:hover:text-green-400
dark:hover:text-green-400
*/
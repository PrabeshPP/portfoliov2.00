import React from 'react'

const Header:React.FC = () => {
  return (
    <section className='sm:h-[10vh] sm:w-[100%] sm:bg-white sm:flex sm:justify-between sm:shadow-header-shadow sm:sticky sm:top-0 sm:z-10  '>
        <div className='h-[100%] w-[20%] flex items-center justify-start select-none box-border'>
            <h1 className='text-2xl font-extrabold font-neucha ml-5 '>
                Pra<span className='text-[crimson]'>besh</span>
                </h1>
        </div>
        <button className='hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
        </button>
        <div className='hidden  sm:flex sm:items-center sm:h-[100%] sm:w-[100%]'>
            <ul className='h-[100%] w-[75%] flex justify-around items-center font-bold uppercase '>
               <li><a href='#home' className='cursor-pointer hover:text-green-500 '>Home</a></li>
               <li><a href='#about' className='cursor-pointer hover:text-green-500 '>About</a></li> 
               <li><a href='#projects'  className='cursor-pointer hover:text-green-500 '>Projects</a></li>
               <li><a href='#services' className='cursor-pointer hover:text-green-500 '>Services</a></li>  
            </ul>
            <a href='#contacts' className='h-[70%] w-[20%]'><button className='h-[100%] w-[100%] bg-red-600 outline-none rounded-full hover:bg-green-500 text-lg font-bold text-white shadow-md shadow-[#00000097]'>Contact me</button></a>
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
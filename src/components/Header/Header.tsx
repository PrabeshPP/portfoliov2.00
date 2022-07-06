import React from 'react'

const Header:React.FC = () => {
  return (
    <div className='h-[10vh] w-[100%] bg-white flex justify-between shadow-header-shadow sticky top-0 z-10 '>
        <div className='h-[100%] w-[20%] flex items-center justify-start select-none box-border'>
            <h1 className='text-2xl font-extrabold font-neucha ml-5 '>
                Pra<span className='text-[crimson]'>besh</span>
                </h1>
        </div>
        <div className='h-[100%] w-[70%] flex items-center'>
            <ul className='h-[100%] w-[75%] flex justify-around items-center font-bold uppercase '>
                <a href='#home'><li className='cursor-pointer hover:text-green-500 '>Home</li></a>
               <a href='#about'> <li className='cursor-pointer hover:text-green-500 '>About</li></a>
                <a href='#projects'><li className='cursor-pointer hover:text-green-500 '>Projects</li></a>
                <a href='#services'><li className='cursor-pointer hover:text-green-500 '>Services</li></a>
            </ul>
            <a href='#contacts' className='h-[70%] w-[20%]'><button className='h-[100%] w-[100%] bg-red-600 outline-none rounded-full hover:bg-green-500 text-lg font-bold text-white shadow-md shadow-[#00000097]'>Contact me</button></a>
        </div>
        
    </div>
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
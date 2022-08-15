import React from 'react'

let isOpen = false 
const openMenu = () => {
  let openMenuBtn = document.querySelector('.open-menu-btn')
  if(!isOpen) {
    openMenuBtn.classList.remove('hidden')
    isOpen = true
  } else {
    openMenuBtn.classList.add('hidden')
    isOpen = false  
  }                                                                                                                      
}


const Navbar = () => {
  return (
    <div className='flex items-center justify-between text-white'>
        <ul className='hidden sm:flex  items-center justify-between text-white'>
            <li className='underline hover:text-[#A40047] text-[16px] font-[400] mr-[10px] '> Home </li>
            <li className='underline hover:text-[#A40047] text-[16px] font-[400] mr-[10px] '> About </li>
            <li className='underline hover:text-[#A40047] text-[16px] font-[400] mr-[10px] '> Contact </li>
            <li className='underline hover:text-[#A40047] text-[16px] font-[400] mr-[10px] '> Transfers </li>
        </ul>
        <span onClick={openMenu} className="block text-[20px] sm:hidden  mr-[10px]">
            <i className="fa fa-bars"></i>{" "}
        </span>
        <input placeholder='Search' className='pl-[5px] sm:pl-[10px] h-[20px] w-[120px] sm:w-[200px] rounded-[10px]'/>

        <div className='hidden open-menu-btn absolute border-b-[2px] border-solid border-[#A40047] left-0 top-[70px] sm:hidden w-full  p-[10px] bg-white'>
            <div className='flex flex-col mx-auto items-center justify-center max-w-[500px]'>
                <ul className='grid gap-[10px]'>
                    <li className='text-[#A40047] hover:underline font-bold mr-[10px]'> Home </li>
                    <li className='text-[#A40047] hover:underline font-bold mr-[10px]'> About </li>
                    <li className='text-[#A40047] hover:underline font-bold mr-[10px]'> Contact </li>
                    <li className='text-[#A40047] hover:underline font-bold mr-[10px]'> Transfers </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
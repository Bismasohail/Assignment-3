import React from 'react'
import { BiUser } from 'react-icons/bi'
import { FiHeart } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'

const HeaderMain = () => {
  return (
    <div className='border-b border-gray-200 pr 0 py-6'>
      <div className='container gap-10 justify-right'>
        <div className='font-bold text-4xl pb-4 pr-0 sm:pb-0 text-center text-blackish'>SPICE MANIA</div>
        <br/>

        <div className='w-full sm:w-[200px] pl-0 md:w-[40%] relative'>
            <input className='border-gray-200 pr-0 mx-20 origin-right border p-2 px-4 rounded-lg w-full'
            type='Text'
            placeholder='Enter my product name . . .'/>
            
       
        </div>
        <div className='hidden lg:flex gap-4 text-gray-500 text-[30]'>
        <BiUser/>
        <div className='relative'>
            <FiHeart/>
            <div className='bg-red-600 rounded-full size-[50%] absolute top-0 right-0 w-[18px] h-[18px] text-[12px] 
            text-white grid place-items-center translate-x-1 translate-y-1 mx-0'></div>
        </div>
        <div className='relative'>
            <HiOutlineShoppingBag/>
            <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] 
            teaxt-white grid place-items-center translate-x-1 translate-y-1'></div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMain

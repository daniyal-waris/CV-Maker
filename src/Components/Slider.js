import React from 'react'

const Slider = () => {
  return (
    <>
        <div className='w-auto h-80 border-2'></div>
        <div className='w-auto bg-gray-200'>
            <ul className='flex space-x-28 ml-16 p-4'>
                <li className='cursor-pointer p-1'>Capabilites</li>
                <li className='cursor-pointer p-1'>Case study</li>
                <li className='cursor-pointer p-1'>What we think</li>
                <li className='cursor-pointer p-1'>Healthcare Blog</li>
                <li className='cursor-pointer p-1'>Our Leaders</li>
            </ul>
        </div>
    </>
  )
}

export default Slider
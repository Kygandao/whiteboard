import React from 'react'

const Navbar = () => {
    return (
        <div className='flex flex-col items-center'>
            <a className='rounded-lg text-lg m-4 bg-green-500 text-white' href='/whiteboard'>
                <p className='p-1'>Start Drawing!</p>
            </a>
        </div>
    )
}

export default Navbar

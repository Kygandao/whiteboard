import React from 'react'

const ColorPicker = () => {
    return (
        <div className='grid grid-cols-2 gap-1 border w-1/6 h-3/6'>
            <div className='border bg-black'></div>
            <div className='border bg-red-600'></div>
            <div className='border bg-green-600'></div>
            <div className='border bg-yellow-600'></div>
            <div className='border bg-blue-600'></div>
            <div className='border bg-indigo-600'></div>
            <div className='border bg-purple-600'></div>
            <div className='border bg-pink-600'></div>
        </div>
    )
}

export default ColorPicker

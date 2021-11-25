import React from 'react'
import Navbar from './Navbar'

const Welcome = () => {
    return (
        <div className='flex flex-col items-center w-full h-full'>
            <div className='flex flex-col items-center justify-center box-border rounded-lg shadow-2xl w-4/6 h-4/6'>
                <p className='text-3xl m-3'>Welcome to the Whiteboard</p>
                
                <p className='text-xl m-3'>Instructions:</p>
                <p>Click and drag your mouse to draw</p>
                <p>Select a color marker at the bottom of the screen to change color</p>
                <p>To Erase, select the Eraser then click and drag to erase minor errors</p>
                <p>Click 'Clear' button to reset the entire Whiteboard</p>
                <p>Right Click and select 'Save Image As..' to save a PNG your current work</p>
                <Navbar />
            </div>
            <div className='flex flex-col items-center justify-center box-border rounded-lg shadow-2xl w-4/6 h-1/6 mt-6'>
                <p>Created by: <a className='text-blue-700' href='https://github.com/Kygandao' target='_blank' rel='noopener noreferrer'>Kygan Dao</a></p>
                <p>as part of the November 2021 MintBean Jr Web Dev Hackathon</p>
                <a className='text-blue-700' href='https://github.com/Kygandao' target='_blank' rel='noopener noreferrer'>GitHub Repository</a>
            </div>
        </div>
    )
}

export default Welcome

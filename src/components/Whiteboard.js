import React, { useEffect, useRef, useState } from 'react'
//import { useWhiteboard } from './WhiteboardContext'
import blackmarker from '../images/blackmarker.png'
import bluemarker from '../images/bluemarker.png'
import greenmarker from '../images/greenmarker.png'
import redmarker from '../images/redmarker.png'
import eraser from '../images/eraser.jpg'

const Whiteboard = () => {
    const whiteboardRef = useRef(null)
    const contextRef = useRef(null)
    const [drawing, setDrawing] = useState(false)

    useEffect(() => {
        const whiteboard = whiteboardRef.current;
        whiteboard.width = window.innerWidth * 2;
        whiteboard.style.width = `${window.innerWidth}px`;
        whiteboard.height = window.innerHeight * 2;
        whiteboard.style.height = `${window.innerHeight}px`;
    
        const context = whiteboard.getContext('2d');
        context.scale(2,2);
        context.lineCap = 'round';
        context.strokeStyle = 'black'
        context.lineWidth = 4
        contextRef.current = context;
      }, [])
    
      const startDrawing =({nativeEvent}) => {
        const {offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setDrawing(true)
      }
    
      const stopDrawing = () => {
        contextRef.current.closePath();
        setDrawing(false)
      }
    
      const draw = ({nativeEvent}) => {
        if (!drawing) {
          return
        } else {
        const {offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke()
        }
      }

    return (
        <div className='flex flex-col items-center justify-center w-full h-full border-4 border-double border-black rounded-lg'>
            <canvas className='w-11/12 h-5/6'
                onMouseDown={startDrawing}
                onMouseUp={stopDrawing}
                onMouseMove={draw}
                ref={whiteboardRef}   
            />

            <div className='flex items-end justify-center mb-2'>
                <img src={blackmarker} alt='Black Marker' className='w-1/6 mx-3'/>
                <img src={bluemarker} alt='Black Marker' className='w-1/6 mx-3'/>
                <img src={greenmarker} alt='Black Marker' className='w-1/6 mx-3'/>
                <img src={redmarker} alt='Black Marker' className='w-1/6 mx-3'/>
                <img src={eraser} alt='Black Marker' className='w-1/12 mx-3'/>
            </div>
        </div>
    )
}

export default Whiteboard

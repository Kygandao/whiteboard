import React, { useEffect, useRef, useState } from 'react'
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

      const changeMarkerBlack = () => {
        const whiteboard = whiteboardRef.current;
        const context = whiteboard.getContext('2d');
        context.strokeStyle = 'black'
        context.lineWidth = 4
      }
      const changeMarkerBlue = () => {
        const whiteboard = whiteboardRef.current;
        const context = whiteboard.getContext('2d');
        context.strokeStyle = 'blue'
        context.lineWidth = 4
      }

      const changeMarkerGreen = () => {
        const whiteboard = whiteboardRef.current;
        const context = whiteboard.getContext('2d');
        context.strokeStyle = 'green'
        context.lineWidth = 4
      }

      const changeMarkerRed = () => {
        const whiteboard = whiteboardRef.current;
        const context = whiteboard.getContext('2d');
        context.strokeStyle = 'red'
        context.lineWidth = 4
      }

      const changeToEraser = () => {
        const whiteboard = whiteboardRef.current;
        const context = whiteboard.getContext('2d');
        context.strokeStyle = 'white'
        context.lineWidth = 50
      }

      const clearWhiteboard = () => {
        const whiteboard = whiteboardRef.current;
        const context = whiteboard.getContext('2d');
        context.fillStyle = 'white'
        context.fillRect(0, 0, whiteboard.width, whiteboard.height)
      }

    return (
        <div className='flex flex-col items-center justify-center w-full h-5/6'>
            <div className='border-b'>
                <canvas
                className='flex w-auto h-auto'
                onMouseDown={startDrawing}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onMouseMove={draw}
                ref={whiteboardRef}   
                />
            </div>

            <div className='flex items-end justify-center mb-2'>
                <img 
                    src={blackmarker}
                    alt='Black Marker'
                    className='w-1/6 m-3'
                    onClick={changeMarkerBlack}
                    style={{cursor:'pointer'}}
                    />
                <img
                    src={bluemarker}
                    alt='Blue Marker'
                    className='w-1/6 m-3'
                    onClick={changeMarkerBlue}
                    style={{cursor:'pointer'}}
                    />
                <img
                    src={greenmarker}
                    alt='Green Marker'
                    className='w-1/6 m-3'
                    onClick={changeMarkerGreen}
                    style={{cursor:'pointer'}}
                    />
                <img
                    src={redmarker}
                    alt='Red Marker'
                    className='w-1/6 m-3'
                    onClick={changeMarkerRed}
                    style={{cursor:'pointer'}}
                    />
                <img
                    src={eraser}
                    alt='Eraser'
                    className='w-1/12 m-3'
                    onClick={changeToEraser}
                    style={{cursor:'pointer'}}
                    />
                <div
                    onClick={clearWhiteboard}
                    style={{cursor:'pointer'}}
                    className='flex items-center border rounded-lg shadow-inner text-center h-9 mx-3 mb-3 bg-gray-100'
                    >
                    <p className='p-2'>Clear</p>
                </div>
            </div>
        </div>
    )
}

export default Whiteboard

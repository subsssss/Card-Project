import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CanvasComponent from './components/scene';
import { Canvas } from '@react-three/fiber';
import InfoBox from './components/infoBox';
import InfoScrollBox from './components/infobox/info-scroll';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

function App() {

  const parentRef=useRef<HTMLDivElement>(null)
  const childRef =useRef<HTMLDivElement>(null);
  const canvasRef =useRef<HTMLCanvasElement>(null);
  const [onView,setOnView]=useState<boolean>(false);


  return (
    <div className="App">
      <header className="App-header">
        <div ref={parentRef} className='w-full h-screen overflow-y-auto relative bg-[#77b6ff]'
        onScroll={(e)=>{
          if(parentRef.current?.scrollTop!>0){
            setOnView(true)
          }
          // else if(childRef.current?.scrollTop!<=0){
          //   setOnView(false)
          // }
  
          // const value= `calc(100% - ${ref.current?.scrollTop!}px)`
          // console.log(value);
          // setScrollHeight(value);
        }}
        >
          <div className='absolute  top-0 left-0 w-28 z-20'>
            <img className='w-full h-full' src='/sysnova.png'/>
          </div>
        <motion.div 
        animate={{height:onView?`50%`:`100%`}}
        className={`${onView?`fixed top-0 z-30`:``} w-full h-full`}
        >
          <Canvas 
          ref={canvasRef}
          shadows style={{backgroundColor:'#77b6ff'}}>
              {/* <fog attach="fog" args={["floralwhite", 100, 100]} /> */}
              <CanvasComponent/>
          </Canvas>
          <div className='w-full absolute bottom-0 text-center'
          onClick={()=>
            {setOnView(!onView)
            }}
          >
            V Scroll
          </div>
        </motion.div>
          {/* <InfoBox/> */}
          <div ref={childRef} className={`${onView?`fixed bottom-0 h-[40%]`:``} 
           overflow-y-auto w-full
          `}
          onScroll={()=>{
            if(childRef.current?.scrollTop===0){
              setOnView(false)
            }
          }}
          >
            <InfoScrollBox/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

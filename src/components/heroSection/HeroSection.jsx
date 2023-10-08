import { Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';
import { useNavigate } from "react-router-dom";
import Typed from 'react-typed';
import MyBackgroundImage from '../../../public/bgmn.jpg'
import MyBackgroundImagetwo from '../../../public/bgmnnn.jpg'

function HeroSection() {
    const navigate = useNavigate();
    const context = useContext(myContext);
    const { mode } = context;
    const externalImage =
    'public/bgmn.jpg';
    const externalImage2 =
    'public/bgmnnn.jpg';
    return (
      
      
      <div className='text-white h-screen bg-bgmg bg-cover backdrop-brightness-40 bg-indigo-300 ' style={{
        
        backgroundImage: mode === 'dark'
          ?
          `url(${MyBackgroundImagetwo})`
          : `url(${MyBackgroundImage})`
      }}>
       
      <div className='max-w-[800px] mt-[0px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p style={{
        
        color: mode === 'dark'
          ?
          'white'
          : 'white'
      }} className=' font-bold p-2'>
          HELLO MY FRIEND ..
        </p>
        <h1 style={{
        
        color: mode === 'dark'
          ?
          'white'
          : 'white'
      }} className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          HAPPY SHARING
        </h1>
        <div style={{
        
        color: mode === 'dark'
          ?
          'white'
          : 'white'
      }} className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Connect with us and 
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
          style={{
        
            color: mode === 'dark'
              ?
              'grey'
              : 'red'
          }}
            strings={['Download', 'Comment', 'Share']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-300'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button style={{
        
        backgroundColor: mode === 'dark'
          ?
          'white'
          : '#00CCFF' ,
        color : mode === 'dark' ? 'black' : 'white'
      }}  className=' w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>Get Started</button>
      </div>
    </div>
//   )
//         <section class="text-gray-600 body-font">
//   <div class="container px-5 py-24 mx-auto">
//     <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
//       <h1 style={{ color: mode === 'dark' ? 'white' : 'black' }} class="flex-grow font-rohit sm:pr-16 text-2xl font-medium title-font text-gray-900">Download engineering books for your first Year for free</h1>

//       <button 
      // style={{
      //   background: mode === 'dark'
      //     ? 'rgb(226, 232, 240)'
      //     : 'rgb(30, 41, 59)',
      //   color: mode === 'dark'
      //     ?
      //     'rgb(30, 41, 59)'
      //     : 'rgb(226, 232, 240)'
      // }}
//   class="flex-shrink-0 mt-2 middle none center rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//   data-ripple-light="true"
// >
//   Books
// </button>
//     </div>
//   </div>
// </section>

    )
}

export default HeroSection
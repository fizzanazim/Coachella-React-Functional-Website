import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Timer from '../Components/Timer'
import Products from '../Components/Products'
import { useDispatch, useSelector } from 'react-redux'
import { Hidedisplay, Popupdisplay } from '../Redux/Actions/Actions'
import Onview from '../Components/Onview'
import Footer from '../Components/Footer'


const Storepage = () => {
    const {overlaydisplay} = useSelector((state)=>state.coachellareducer)
    const dispatch = useDispatch()
    
    const [overflow, setOverflow] = useState('overflow-auto')
    const hidedisplay =()=>{
    
        setOverflow('overflow-auto')
        dispatch(Hidedisplay())
    
    }

    const popup = (e)=>{
    
        setOverflow('overflow-hidden')
        dispatch(Popupdisplay(e))

    }
    

    
    
    
 const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
 
//   }, []);

  console.log(window);
  
    

  return (
      <div className={`w-full h-screen ${overflow}`}>
        <div onClick={hidedisplay} className={`${overlaydisplay} z-49 absolute bg-[rgba(180,180,180,0.4)] top-0 left-0 w-full h-screen`}></div>
        <div className={`${overlaydisplay} z-50 absolute w-2/3 h-[650px] pb-5 bg-white rounded top-1/2 left-1/2 -translate-1/2`}>
            <Onview/>
        </div>
        <Navbar color='bg-[#E0E7E4]'/>
        <div className='w-full h-screen flex gap-4 px-15'>
            <div className='bg-image w-1/2'></div>
            <div className='bg-[#EDF5E9] font-serif w-1/2 gap-4 flex items-center justify-center flex-col'>
                <h2 className='text-3xl'>FLASH SALE</h2>
                <h1 className='text-8xl '>-70% off</h1>
                <h3 className='w-1/2 text-center '>Great deals for black friday. Hurry up and get your beauty products</h3>
                <button className='mt-8 border py-5 px-10'>SHOP THE SALE</button>
            </div>
        </div>
        <Timer/>
        <Products overflowval ={overflow} popup={popup}/>
        <Footer/>
    </div>
  )
}

export default Storepage
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineEye } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { Popupdisplay } from '../Redux/Actions/Actions';

const Showdata = ({e,i, popup, overflowval}) => {  
    
    const dispatch = useDispatch()

    // const popup = (e)=>{

    //     dispatch(Popupdisplay(e))

    // }

    var slug = e.shoename.replaceAll(" ", "-")

  return (
    <div className='relative group'>
        <Link to={`/product/${slug}`}>
            <div>
                {/* <div onMouseEnter={setimage} onMouseLeave={mouseleave} className='overflow-hidden'> */}
                <div className='overflow-hidden relative group w-full h-[400px] bg-green-200'>
                    <img className={`group-hover:hidden block`} src={e.images[0]} alt="" />
                    <img className={`effects duration-1000 absolute top-0 left-0 group-hover:block hidden`} src={e.images[1]} alt="" />
                </div>
                <h2 className='uppercase text-lg mt-2'>{e.shoename}</h2>
                <div className='flex gap-2'>
                    <h2 className='line-through ml-2 text-gray-400'>${e.origionalprice}</h2>
                    <span className=''>${e.discountedprice}</span>
                </div>
            </div>
        </Link>
        <div className={`absolute  text-white flex items-center justify-center w-14 h-7 rounded-lg top-5 left-5 bg-[#da3f3f]`}>{Math.floor(100-(e.discountedprice/e.origionalprice*100))}%</div>
        <Link to={`/product/${slug}`}><div className={`absolute group-hover:flex hidden items-center justify-center bg-white bottom-1/8 w-[90%] h-12 left-1/2 -translate-1/2`}>Select Options</div></Link>
        <div onClick={()=>popup(e)} className={`${overflowval} w-10 h-10 group-hover:flex hidden rounded-full items-center justify-center bg-white cursor-pointer absolute right-5 top-5`}>
            <AiOutlineEye/>
        </div>
    </div>
  )
}

export default Showdata
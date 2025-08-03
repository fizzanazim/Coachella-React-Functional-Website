import React, { useEffect, useState } from 'react'
import { TiSocialInstagram } from "react-icons/ti";
import { SlSocialFacebook } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({color}) => {

    const {cartarray, notifstate} = useSelector(state=>state.coachellareducer)
    const [isFixed, setisFixed] = useState(false)

    // const handlescroll = () => {
    //     console.log(window.scrollY);
        
    //     if (window.scrollY > 160) {
    //         setisFixed(true)
    //     } else {
    //         setisFixed(false)
    //     }
    // }

//      useEffect(() => {
//     const handleScroll = () => {
//       console.log("Scroll Y:", window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       // Clean up the scroll listener on unmount
//       window.removeEventListener("scroll", handleScroll);
//     };
//   });
  return (
    <div className='w-full min-h-30 relative'>
        <div className={`w-full h-10 ${color} flex items-center justify-center font-medium`}>Free Delivery on orders over $200. Don’t miss discount.</div>
        <div className='px-15 h-12 flex justify-between items-center border border-[#E7E7E7]'>
            <div className='flex items-center justify-center gap-3'>
                <div className='flex items-center justify-center gap-1 hover:text-[#E7E7E7] duration-300'>
                    <TiSocialInstagram/>
                    <h2>100k Followers</h2>
                </div>
                <div className='flex items-center justify-center gap-1 hover:text-[#E7E7E7] duration-300'>
                    <SlSocialFacebook/>
                    <h2>300k Followers</h2>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <h2 className='border-r px-3'>Open Doors To A World Of Fashion</h2>
                <h2 className='text-underline underline offset-3 px-3 hover:text-[#E7E7E7] duration-200 cursor-pointer'>Discover More</h2>
            </div>
            <div className='flex items-center justify-center gap-2 '>
                <div className='flex items-center justify-center gap-2 relative group'>
                    <img className='w-8' src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg" alt="" />
                    <div className='flex items-center justify-center gap-1 '>English <IoIosArrowDown/></div>
                    <div className='absolute top-[130%] left-0 px-7 py-6 shadow bg-white hidden group-hover:block'>
                        <ul>
                            <li>French</li>
                            <li>Dutch</li>
                        </ul>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-1'>USD <IoIosArrowDown/></div>
            </div>
        </div>
        <div className={`w-full h-20 px-15 flex justify-between items-center ${isFixed ? 'fixed top-0 bg-white' : 'relative'}`}>
            <div className='hidden'>
                <img className='h-10' src="https://minimog-4437.kxcdn.com/robust/wp-content/themes/minimog-child-demo/assets/demos/halloween/dark-logo.png" alt="" />
            </div>
            <div>
                <ul className='flex justify-center gap-8 text-lg items-center'>
                    <Link to={'/'}><li>HOME</li></Link>
                    <li>SHOP</li>
                    <Link to={'/checkout'}><li>CART</li></Link>
                    <Link to={'/checkout'}><li>CHECKOUT</li></Link>
                </ul>
            </div>
            <div>
                <img className='h-10' src="https://minimog-4437.kxcdn.com/robust/wp-content/themes/minimog-child-demo/assets/demos/coachella/dark-logo.png" alt="" />
            </div>
            <div className='flex justify-center items-center gap-3'>
                <GoPerson className='text-2xl'/>
                <CiSearch className='text-2xl'/>
                <div className='relative'>
                    <Link to={'/checkout'}>
                        <CiShoppingCart className='text-2xl cursor-pointer'/>
                        <div className='rounded-full h-5 w-5 bg-black absolute -top-1/2 -right-1/2 text-[12px] font-semibold text-white text-center content-center'>
                        {

                            cartarray.reduce((init, e)=>{

                                return init + e.proqty

                            }, 0)

                        }
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
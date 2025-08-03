import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { GiStickGrenade } from "react-icons/gi";
import { ImTicket } from "react-icons/im";
import { BsStickies } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { FaChevronRight } from "react-icons/fa";
import Footer from '../Components/Footer';
import { IoLogoReddit } from "react-icons/io";

const Cartpage = () => {

    const [val, setval] = useState(true)
    const {cartarray} = useSelector((state)=>state.coachellareducer)  

  return (
    <div>
        <Navbar color='bg-yellow-200'/>
        <div className='flex flex-col gap-10'>
            <div>
                <h2 className='text-center text-4xl font-semibold'>Checkout</h2>
                <p className='text-center flex gap-3 text-lg items-center justify-center mt-3'>Home <FaChevronRight/> Checkout</p>
            </div>
            {cartarray.length == 0 ?  <p className='bg-[#E0E7E4] h-100 items-center flex justify-center text-4xl py-10 gap-6'><IoLogoReddit className='text-8xl'/>Oops, your cart is empty!</p>
            
            :
            
            <div className='px-40 flex flex-col gap-3'>
                <p>Returning customer? Click here to login</p>
                <div className='flex justify-between'>
                    <div className='w-1/2 flex flex-col gap-3'>
                        <h2 className='text-3xl'>Billing Details</h2>
                        <form className='flex flex-col gap-5 pr-5' action="">
                            <div className='flex justify-between gap-3'>
                                <div className='flex flex-col w-1/2 gap-1'>
                                    <label htmlFor="firstname">First Name *</label>
                                    <input className='border border-gray-300 px-4 h-10 rounded' id='firstname' type="text" />
                                </div>
                                <div className='flex flex-col w-1/2 gap-1'>
                                    <label htmlFor="lastname">Last Name *</label>
                                    <input className='border border-gray-300 px-4 h-10 rounded' id='lastname' type="text" />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="companyname">Company name</label>
                                <input className='border border-gray-300 px-4 h-10 rounded' id='companyname' type="text" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="countryname">Country/ Region*</label>
                                <input className='border border-gray-300 px-4 h-10 rounded' id='countryname' type="text" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="streetaddress">Street Address*</label>
                                <input className='border border-gray-300 px-4 h-10 rounded' id='streetaddress' placeholder='House number and street number' type="text" />
                            </div>
                            <input className='border border-gray-300 px-4 h-10 rounded' id='countryname' placeholder='Apartment, suote, units (optional)' type="text" />
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="towncity">Town/ City*</label>
                                <input className='border border-gray-300 px-4 h-10 rounded' id='towncity' placeholder='House number and street number' type="text" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="state">State*</label>
                                <input className='border border-gray-300 px-4 h-10 rounded' id='state' placeholder='House number and street number' type="text" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="zipcode">ZIP Code*</label>
                                <input className='border border-gray-300 px-4 h-10 rounded' id='zipcode' placeholder='House number and street number' type="number" />
                            </div>
                            <div className='flex justify-between gap-3'>
                                <div className='flex flex-col w-1/2 gap-1'>
                                    <label htmlFor="Phone">phone*</label>
                                    <input className='border border-gray-300 px-4 h-10 rounded' id='Phone' placeholder='House number and street number' type="number" />
                                </div>
                                <div className='flex flex-col w-1/2 gap-1'>
                                    <label htmlFor="email">Email address*</label>
                                    <input className='border border-gray-300 px-4 h-10 rounded' id='email' placeholder='House number and street number' type="email" />
                                </div>
                            </div>
                            <div>
                                <input type="checkbox" id="check" />
                                <label htmlFor="check">Ship to a different address?</label>
                            </div>
                        </form>
                    </div>
                    <div className='w-1/2 flex flex-col gap-3 pl-10'>
                        <h2 className='text-2xl'>Order Summary</h2>
                        {
                            cartarray.map((e,i)=>{

                                return(<>
                                
                                    <div className='flex justify-between items-center h-25 border-t border-b border-gray-300'>
                                        <div className='flex gap-3 items-center w-2/3'>
                                            <div>
                                                <img className='w-[50px]' src={e.proimg} alt="" />
                                            </div>
                                            <div>
                                                <h3 className=''>{e.prodname} - {e.prodcolor}&nbsp;&nbsp;&nbsp; x{e.proqty}</h3>
                                                <h3>size: {e.prodsize}</h3>
                                            </div>
                                        </div>
                                        <div className='w-1/3 flex items-center justify-end'>
                                            <p>$
                                                {
                                                    e.proprice * e.proqty
                                                }
                                            </p>
                                        </div>
                                    </div>
                                    
                                </>)

                            })

                        }
                        <div>
                            <div className='w-full h-20 border-b border-gray-200 flex items-center justify-center'>
                              <div className='px-10 h-13 flex flex-col items-center justify-center'>
                                    <BsStickies/>
                                    <h2>Shipping</h2>
                                </div>
                                <div className='border-l border-gray-200 border-r px-10 h-13 flex flex-col items-center justify-center'>
                                    <GiStickGrenade/>
                                    <h2>Note</h2>
                                </div>
                                <div className='px-10 h-13 flex flex-col items-center justify-center'>
                                    <ImTicket/>
                                    <h2>Coupon</h2>
                                </div>
                            </div>
                        </div>
                         <div className='flex items-center justify-between'>
                            <p>SUBTOTAL</p>
                            <p>$
                                {

                                    cartarray.reduce((init, e)=>{

                                        return init + (e.proqty * e.proprice)

                                    }, 0)

                                }
                            </p>
                        </div>
                        <div className='flex items-center justify-between border-b pb-4'>
                            <p>SHIPPING</p>
                            <div className='flex flex-col items-end justify-between'>
                                <p>FREE SHIPPING</p>
                                <p>FLAT SHIPPING $10.00</p>
                            </div>
                        </div>
                            <div className='flex items-center justify-between h-14'>
                                <p>TOTAL</p>
                            <p>${cartarray.reduce((init, e)=>{

                                        return init + (e.proqty * e.proprice)

                                    }, 0)}</p>
                        </div>
                        <div className='w-full' >
                            <img className='w-[80%]' src='./src/assets/Screenshot 2025-06-19 183114.png' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            }
        </div>
        <Footer/>
    </div>
  )
}

export default Cartpage
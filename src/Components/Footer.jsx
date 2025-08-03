import React from 'react'
import { FaBoxOpen } from "react-icons/fa6";
import { CiDollar } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { FiFileText } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialSkype } from "react-icons/ti";
import { SlSocialSpotify } from "react-icons/sl";

const Footer = () => {
  return (
    <div className='w-full min-h-100 border-t border-gray-200'>
        <div className='w-full h-38 px-15  flex items-center justify-between'>
            <div className='w-1/4 flex gap-3'>
                <div className='text-3xl'>
                    <FaBoxOpen/>
                </div>
                <div className='flex flex-col '>
                    <h2 className='font-serif font-semibold text-xl'>Free Shipping</h2>
                    <p>Free Shipping for orders over £130</p>
                </div>
            </div>
            <div className='w-1/4 flex gap-3'>
                <div className='text-3xl'>
                    <CiDollar/>
                </div>
                <div className='flex flex-col '>
                    <h2 className='font-serif font-semibold text-xl'>Money Guarantee</h2>
                    <p>Within 30 days for an exchange.</p>
                </div>
            </div>
            <div className='w-1/4 flex gap-3'>
                <div className='text-3xl'>
                    <CiHeadphones/>
                </div>
                <div className='flex flex-col '>
                    <h2 className='font-serif font-semibold text-xl'>Online Support</h2>
                    <p>24 hours a day, 7 days a week</p>
                </div>
            </div>
            <div className='w-1/4 flex gap-3'>
                <div className='text-3xl'>
                    <FiFileText/>
                </div>
                <div className='flex flex-col '>
                    <h2 className='font-serif font-semibold text-xl'>Flexible Payment</h2>
                    <p>Pay with Multiple Credit Cards</p>
                </div>
            </div>
        </div>


        <div className='flex justify-between bg-[#F5F5F5] px-15'>
            <div className='w-1/4 border-r border-gray-300 py-12 flex flex-col gap-3'>
                <h2 className='capitalize text-md font-semibold font-serif'>company</h2>
                <div>
                    <p className='text-gray-600'>Find a location nearest you.</p>
                    <p className='underline text-gray-600'>See Our Stores</p>
                </div>
                <p className='text-gray-600'>+391 (0)35 2568 4593</p>
                <p className='text-gray-600'>hello@domain.com</p>
            </div>
            <div className='w-1/4 border-r border-gray-300 pl-5 py-12 flex flex-col gap-3'>
                <h3 className='capitalize text-md font-semibold font-serif'>information</h3>
                <ul className='capitalize flex flex-col gap-1 text-gray-600'>
                    <li>my account</li>
                    <li>login</li>
                    <li>my cart</li>
                    <li>wishlist</li>
                    <li>checkout</li>
                </ul>
            </div>
            <div className='w-1/4 border-r border-gray-300 pl-5 py-12 flex flex-col gap-3'>
                <h3 className='capitalize text-md font-semibold font-serif'>services</h3>
                <ul className='capitalize flex flex-col gap-1 text-gray-600'>
                    <li>About Us</li>
                    <li>careers</li>
                    <li>delivery information</li>
                    <li>privacy policy</li>
                    <li>terms & contditions</li>
                </ul>
            </div>
            <div className='w-1/4 pl-5 py-12 flex flex-col gap-3'>
                <h2 className='capitalize text-md font-semibold font-serif'>Subscribe</h2>
                <p className='text-gray-600'>Enter your email below to be the first to know about new collections and product launches.</p>
                <div>
                    <input className='border w-full h-10 px-3 placeholder-black' type="email"  placeholder={`${<CiMail/>}  Your Email`} />
                </div>
            </div>
        </div>

        <div className='flex items-center px-15 justify-between min-h-14'>
            <div>
                <img src="https://minimog-4437.kxcdn.com/robust/wp-content/uploads/sites/7/2022/10/payment.png" alt="" />
            </div>
            <p className='uppercase'>© minimog 2022</p>
            <div className='flex items-center gap-5 text-xl'>
                <SlSocialFacebook/>
                <TiSocialTwitter/>
                <TiSocialSkype/>
                <SlSocialSpotify/>
            </div>
        </div>
    </div>
  )
}

export default Footer
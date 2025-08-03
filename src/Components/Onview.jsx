import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Addproduct, Closesidebardisplay } from '../Redux/Actions/Actions';
// import { IoIosArrowForward } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";

const Onview = () => {

    const {mapobj} = useSelector((state)=>state.coachellareducer)

        const [currentimage, setCurrentimage] = useState('')
          const [currentcolor, setCurrentcolor] = useState('')
          const [currentsize, setCurrentsize] = useState('')
          const [counter, setCounter] = useState(1)
          const [overflow, setOverflow] = useState('overflow-auto')
          const [cartobj, setCartobj] = useState({
        
            proimg: '', 
            prodname: '',
            prodcolor: '',
            prodsize: '',
            proqty: '',
            proprice: ''
        
          })
        
        useEffect(() => {
            if (mapobj?.images && mapobj.images.length > 0) {
                setCurrentimage(mapobj.images[0]);
                
            }
            if (mapobj?.colors && mapobj.colors.length > 0) {
                setCurrentcolor(mapobj.colors[0].colorname);
                
            }
            if (mapobj?.size && mapobj.size.length > 0) {
                setCurrentsize(mapobj.size[0]);
                
            }
        }, [mapobj]);
    
      useEffect(()=>{

        if(mapobj?.images && mapobj?.colors && mapobj?.size){
    
        setCartobj({
          
          proimg: mapobj?.images[0], 
          prodname: mapobj?.shoename,
          prodcolor: currentcolor,
          prodsize: currentsize,
          proqty: counter,
          proprice: mapobj?.discountedprice
          
        })
    }
    
      }, [currentcolor, currentsize, counter])
    
      const selectcolor = (e)=>{
    
        setCurrentcolor(e.colorname)
      }
    
      const selectsize = (e)=>{
    
        setCurrentsize(e)
    
      }
    
      const cleardata = (e)=>{
    
        setCurrentsize('')
        setCurrentcolor('')
    
      }
    
      const dispatch = useDispatch()
    
    
    
      const addtocart = ()=>{
    
        setOverflow('overflow-hidden')
    
        if(currentsize!='' && currentcolor!=''){
    
          dispatch(Addproduct(cartobj))      
          // dispatch(Addproduct({...obj, color: size:}))     //this is how we can add new keys. We can ass new keys and send the same object
    
        }
        else{
    
          alert('Please select size and color')
    
        }
       
      }
    
      const increasequantity =()=>{
    
        setCounter(counter+1)
    
      }
    
      const decreasequantity =()=>{
    
        if(counter>1){
    
          setCounter(counter-1)
    
        }
        
      }
    
    const [margin, setmargin] = useState('ml-0')
    const [slidercounter, setslidercounter] = useState(0)


    const sliderleft = ()=>{

        if(slidercounter>0){

            setslidercounter(slidercounter-1)

        }

        
    }
    
    const sliderright = ()=>{

        if(slidercounter<3){
        
            setslidercounter(slidercounter+1)
        }
        

    }

    // useEffect(()=>{


    //         let temp = slidercounter * -100
    //         console.log(slidercounter, `ml-[${temp}%]`);
    //         setmargin(`ml-[${temp}%]`)


    // }, [slidercounter])
    

  return (

    <div>
        <div className='w-full h-[650px] flex gap-2'>
            <div className='w-1/2 h-full gap-8'>
                <div className='w-full h-[650px] relative overflow-hidden'>
                    <FaChevronCircleLeft onClick={sliderleft} className='absolute top-1/2 left-5 cursor-pointer -translate-y-1/2 text-3xl'/>
                    <FaChevronCircleRight onClick={sliderright} className='absolute top-1/2 right-5 cursor-pointer -translate-y-1/2 text-3xl'/>
                    <div className={`w-[400%] ml-[${slidercounter * -100}%] h-full flex`}>
                        {
                    mapobj?.images && mapobj?.images.map((e,i)=>{

                    return(<>
                    
                        <img className='w-full h-full' src={e} alt="" />
                        
                    </>)

                    })

                }

                    </div>

                </div>
            </div>

            <div className='w-1/2 flex flex-col gap-3 px-10'>
                <div className=' border w-[55px] mt-5 h-9 flex items-center justify-center rounded-lg bg-[#FF7A15]'>{Math.floor(100-(mapobj?.discountedprice / mapobj?.origionalprice *100))}%</div>
                <h2 className='text-3xl font-semibold capitalize'>{mapobj?.shoename}</h2>
                <div className='w-full flex items-center justify-between text-lg'>
                <div className='flex gap-2 items-center'>
                    <p className='line-through text-md text-gray-300'>${mapobj?.origionalprice}</p>
                    <p className='text-lg text-[#FF7A15]'>${mapobj?.discountedprice}</p>
                </div> 
                <div className='flex items-center gap-2'>
                    <div className='flex'>
                    <CiStar/><CiStar/><CiStar/><CiStar/><CiStar/>
                    </div>
                    <div>(0 reviews)</div>
                </div>
                </div>
                <div className='flex items-center gap-2'><FaRegEye/>24 people are viewing this right now</div>
                <div className='flex gap-2 flex-col'>
                <h2>Color: {currentcolor}</h2>
                <div className='flex gap-3'>
                    {
                    mapobj.colors && mapobj?.colors.map((e,i)=>{
                        
                        return(<>
                        
                            <div className={`hover:p-1 rounded-full hover:border w-10 h-10 duration-200 ${e.colorname=='white'? 'shadow': ''} ${currentcolor == e.colorname ? "border p-1" : ""} cursor-pointer`}>
                            <div onClick={()=>selectcolor(e)} className={`w-full h-full bg-[${e.colorcode}] rounded-full`}></div>
                            </div>
                            
                        </>)

                        })
                    }
                </div>
                </div>

                <div>Size: {currentsize}</div>
                <div className='flex items-center gap-3'>
                    {

                    mapobj?.size && mapobj?.size.map((e,i)=>{

                        return(<>
                        
                            <div onClick={()=>selectsize(e)} className={`${e==currentsize? 'border-black' : 'border-gray-200'} border  hover:border-black cursor-pointer rounded-md w-10 h-11 flex items-center justify-center text-lg`}>{e}</div>
                        
                        </>)

                    })

                    }
                </div>
                <button onClick={cleardata} className='cursor-pointer w-20'>x Clear</button>
                <div className='w-full flex flex-col gap-3'>
                    <h3>Quantity</h3>
                    <div className = 'flex items-center gap-4'>
                    <div className='flex items-center justify-between rounded px-5 w-35 bg-[#F1F1F1] h-12'>
                        <button onClick={decreasequantity} className='text-2xl cursor-pointer'>-</button> 
                        <span>{counter}</span> 
                        <button onClick={increasequantity} className='text-2xl cursor-pointer'>+</button>
                    </div>
                    <button onClick={addtocart} className='border px-10 w-[350px] h-12 rounded cursor-pointer'>Add to Cart</button>
                    </div>
                </div>
                <div>
                <button className='w-full border rounded h-12 uppercase cursor-pointer'>Buy Now</button>
                <div className='border-b flex gap-4 h-17 border-gray-100 items-center'>
                    <h2>Ask a Question</h2>
                    <h2>Share</h2>
                </div>
                <div className='h-15 flex items-center'>Free Shipping & Returns: On all orders over $200.00</div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Onview
import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Link, useParams } from 'react-router-dom'
import Data from '../Data'
import { IoIosArrowForward } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import Sidebar from '../Components/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { Addproduct, Closesidebardisplay } from '../Redux/Actions/Actions';
import Footer from '../Components/Footer';

const Singleproductpage = () => {

  let {productname} = useParams()

  let name = productname.replaceAll("-", " ")

  console.log(name);
  
  
  let obj = Data.dataarr.find((e,i)=>{
    
    return e.shoename == name
    
  })
  
  const [currentimage, setCurrentimage] = useState(obj?.images[0])
  const [currentcolor, setCurrentcolor] = useState(obj?.colors[0].colorname)
  const [currentsize, setCurrentsize] = useState(obj?.size[0])
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

  const {sidebardisplay} = useSelector((state)=>state.coachellareducer)

  
  const pickimage = (e)=>{

    setCurrentimage(e)

  }

  useEffect(()=>{

    setCartobj({
      
      proimg: obj?.images[0], 
      prodname: obj?.shoename,
      prodcolor: currentcolor,
      prodsize: currentsize,
      proqty: counter,
      proprice: obj?.discountedprice
      
    })

  }, [currentcolor, currentsize, counter])

  const selectcolor = (e)=>{

    setCurrentcolor(e.colorname)
    // setColordisplay('border')
    // setColorpadding('1px')

  }

  const selectsize = (e)=>{

    setCurrentsize(e)

  }

  const cleardata = (e)=>{

    setCurrentsize('')
    setCurrentcolor('')

  }

  const dispatch = useDispatch()

  const closesidebar = ()=>{

    setOverflow('overflow-auto')
    dispatch(Closesidebardisplay())      

  }

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

  return (
    <div className={`h-screen ${overflow}`}>
        <Navbar color="bg-red-200" />
        <div className='flex items-center justify-center w-full gap-2'>
          <h4>Home</h4>
          <IoIosArrowForward/>
          <h4>Products</h4>
          <IoIosArrowForward/>
          <h4>BFCM</h4>
          <IoIosArrowForward/>
          <h4>{obj?.shoename}</h4>
          <IoIosArrowForward/>
          <h4>{obj?.shoename} platform</h4>
        </div>

        <div className='w-full px-20 flex gap-2 mt-15'>
          <div className='w-1/2 flex gap-8'>
            <div className='w-1/10 flex flex-col gap-3'>
              {
                obj?.images.map((e,i)=>{

                  return(<>
                  
                    <div onClick={()=>{pickimage(e)}} className='w-full duration-200 hover:p-1 hover:border cursor-pointer'>
                      <img src={e} alt="" />
                    </div>
                    
                  </>)

                })

              }
            </div>
            <div >
              <img className='h-200' src={currentimage} alt="" />
              </div>
          </div>

          <div className='w-1/2 flex flex-col gap-3 px-10'>
              <div className=' border w-[55px] h-9 flex items-center justify-center rounded-lg bg-[#FF7A15]'>{Math.floor(100-(obj?.discountedprice / obj?.origionalprice *100))}%</div>
              <h2 className='text-3xl font-semibold capitalize'>{obj?.shoename}</h2>
              <div className='w-full flex items-center justify-between text-lg'>
                <div className='flex gap-2 items-center'>
                  <p className='line-through text-md text-gray-300'>${obj?.origionalprice}</p>
                  <p className='text-lg text-[#FF7A15]'>${obj?.discountedprice}</p>
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
                    obj?.colors.map((e,i)=>{
                      
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

                    obj?.size.map((e,i)=>{

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
                <Link to={'/checkout'}><button className='w-full border rounded h-12 uppercase cursor-pointer'>Buy Now</button></Link>
                <div className='border-b flex gap-4 h-17 border-gray-100 items-center'>
                  <h2>Ask a Question</h2>
                  <h2>Share</h2>
                </div>
                <div className='h-15 flex items-center'>Free Shipping & Returns: On all orders over $200.00</div>
              </div>
          </div>
        </div>

        <Footer/>
        <div onClick={closesidebar} className= {`bg-[rgba(123,123,123,0.4)] ${overflow} ${sidebardisplay} h-screen w-full absolute top-0 left-0`}></div>
        <div className= {`w-[30%] ${sidebardisplay} h-screen absolute right-0 top-0 overflow-hidden`}>
            <Sidebar/>
        </div>
    </div>
  )
}

export default Singleproductpage
import React, { useState } from 'react'
import Data from '../Data'
import { Link } from 'react-router-dom'
import Showdata from './Showdata'

const Products = ({popup, overflowval}) => {


  return (
    <div className='w-full px-15 py-5'>
        <div className='w-full overflow-hidden'>
            <div className='w-[175%] flex items-center-justify-between gap-3'>
                {
                    Data.dataarr.map((e,i)=>{

                        return(<>
                            <div className='w-1/7 flex flex-col gap-1'>
                                <Showdata overflowval={overflowval} popup={popup} e={e} i={i}/>
                            </div>
                            
                        </>)

                    })

                }
            </div>
        </div>
    </div>
  )
}

export default Products
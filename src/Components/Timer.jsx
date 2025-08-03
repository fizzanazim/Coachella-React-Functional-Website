import React, { useEffect, useState } from 'react'

const Timer = () => {
// Helper function to pad numbers with leading zeros
const padZero = (num) => String(num).padStart(2, '0');

const [seconds, setseconds] = useState(null)
const [minutes, setminutes] = useState(null)
const [hours, sethours] = useState(null)
const [days, setdays] = useState(null)

// Example timer values (replace with state/logic as needed)
// const days = 28;
// const hours = 19;
// const minutes = 2;
// const seconds = 5;



useEffect(()=>{

        setInterval(() => {

                let CurrentDate = new Date().getTime()
                let fewdays = new Date(new Date().getFullYear(), 6, 22, 0, 0, 0).getTime()

                let x = fewdays - CurrentDate
                
                
                setseconds(Math.floor(x / 1000 % 60))
                setminutes(Math.floor(x/1000/60%60))
                sethours(Math.floor(x/1000/60/60%24))
                setdays(Math.floor(x/1000/60/60/24%30.36))
                
        }, 1000);        

}, [])

return (
    <div className='w-full h-30 px-15 mt-10'>
            <div className='w-full h-full border-b border-[#E7E7E7] flex items-center justify-between'>
                    <div className='flex justify-center flex-col gap-2'>
                            <h2 className='capitalize text-3xl'>last chance sale</h2>
                            <h3>Save on all best selling and exclusive styles</h3>
                    </div>
                    <div className='flex items-center justify-center gap-4'>
                            <div className='flex items-center justify-center gap-2 flex-col'>
                                    <h2 className='text-4xl'>{padZero(days)}</h2>
                                    <h3 className='uppercase'>Days</h3>
                            </div>:
                            <div className='flex items-center justify-center gap-2 flex-col'>
                                    <h2 className='text-4xl'>{padZero(hours)}</h2>
                                    <h3 className='uppercase'>hours</h3>
                            </div>:
                            <div className='flex items-center justify-center gap-2 flex-col'>
                                    <h2 className='text-4xl'>{padZero(minutes)}</h2>
                                    <h3 className='uppercase'>minutes</h3>
                            </div>:
                            <div className='flex items-center justify-center gap-2 flex-col'>
                                    <h2 className='text-4xl'>{padZero(seconds)}</h2>
                                    <h3 className='uppercase'>seconds</h3>
                            </div>
                    </div>
            </div>
    </div>
)
}

export default Timer
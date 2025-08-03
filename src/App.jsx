import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Storepage from './Pages/Storepage'
import Singleproductpage from './Pages/Singleproductpage'
import Cartpage from './Pages/Cartpage'

const App = () => {

    //  const handleScroll = () => {
    //     console.log("asaaaaa");
        
    // //   setIsScrolled(window.scrollY > 100);
    // };

    // useEffect(()=>{
    //   window.addEventListener("scroll", handleScroll);
    // }, [])
    
    // console.log(window);
    

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Storepage/>}></Route>
        <Route path='/product/:productname' element={<Singleproductpage/>}></Route>
        <Route path={'/checkout'} element={<Cartpage/>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
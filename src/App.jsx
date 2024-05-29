import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components/components";
import React from "react";

const App=() =>{
 
  return (
   <BrowserRouter>
   <div className="relative z-0 bg-image bg-primary ">
    <div className="bf-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar/>
      <Hero/>
    </div>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
     
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
   </div>
   </BrowserRouter>
  )
}

export default App

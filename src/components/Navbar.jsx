import React, { useState } from "react"


function Navbar(){
  const [toggle,setToggle]= useState(true)
     function handleClick(){
      if(toggle){
        setToggle(false)
      } else {
        setToggle(true)
      }
    
     }
    return (
    
         <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#"> <img src="logo-light.png" className="brand-image" alt="name-logo" ></img> </a>
        <button onClick={handleClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target={toggle ? "#navbarNav" : ".navbar-collapse.show"} >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a onClick={handleClick} className="nav-link active" href="#footer" >Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#root"  data-bs-target=".navbar-collapse.hidden">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contact</a>
              </li>
          </ul>
        </div>
        
       </nav>
   
       
       
 
    )
}

export default Navbar;


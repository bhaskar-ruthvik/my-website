import React from "react"
import Svg from "./components/Svg"
import Navbar from "./components/Navbar"
import Textcontent from "./components/Textcontent"
import Icon from "./components/Icon"
import About from "./components/About"
import MainBg from "./components/MainBg"
import Card from "./components/Card"
import Bg from "./components/Bg"

function App() {

  return (
    <div>
    <div className="mobile-filler">
    <div className="container-fluid extra main" id="Head">
      <Navbar />
      <div className = "row">
      <div className="col-lg-12 col-md-8">
      <Textcontent />
      </div>
      </div>
      
      </div>
      </div>
       <div id="Svg">
       <MainBg />
      </div>
      <div id="root" class="container-fluid extra about">
      
     <About />
    </div>
        
      <div className="container-fluid extra try">
      <div className="row ">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <Icon />
          <h1 className="about-head toppad" align="center">My Work</h1>
          <h1 className="head-rule white">---------------------</h1>
        </div>
        <div className="col-lg-4"></div>
       
      </div>
      <div className = "row projects">
      <div className="col-lg-4 cards" align="center"><Card /></div>
        <div className="col-lg-4 cards" align="center"><Card /></div>
        <div className="col-lg-4 cards" align="center"><Card /></div>
      </div>
      </div>
       <div id="Svg"><Svg /></div>
       <div id="filler"></div>
       <div id="Svg"><Bg /></div>
       <div id="footer">
       <i class="fa-brands fa-instagram">  </i>
       <i class="fa-brands fa-facebook">  </i>
     <i class="fa-brands fa-github">  </i>
     <i class="fa-brands fa-linkedin">  </i>
     <p className="footer-para">Contact me!</p>
     
       </div>
     
     </div>
     
  );
}

export default App;

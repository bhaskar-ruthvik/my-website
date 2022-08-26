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
      <div className="col-lg-4 cards" align="center"><Card title="Weather WebApp" url = "https://murmuring-peak-24594.herokuapp.com/" content="Want to know the weather? Here is a beautiful webapp designed using node.js,express.js and ejs to give you the current temperature of any location in the world!" src="./weather-preview.png"/></div>
        <div className="col-lg-4 cards" align="center"><Card title="Card title" content="Some quick example text to build on the card title and make up the bulk of the card's content." src="./wave-vector-light.svg"/></div>
        <div className="col-lg-4 cards" align="center"><Card title="Card title" content="Some quick example text to build on the card title and make up the bulk of the card's content." src="./wave-vector-light.svg"/></div>
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

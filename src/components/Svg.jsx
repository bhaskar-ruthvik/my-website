import React,{useState} from "react"

function Svg(props){
    const [scroll,setScroll] =useState(false)
    function handleScroll(){
        
      if(window.scrollY >=128 && window.scrollY<=1056){
        setScroll(true)
      }
     else {
        setScroll(false)
     }
     console.log(window.scrollY)
    }
    window.addEventListener("scroll",handleScroll)
    return (
    <svg width="100%" height="70%" viewBox="0 0 960 540" fill="none" xmlns="http://www.w3.org/2000/svg" className="wave-bg reverse" id="background">
<g id="wave-haikei 1" clip-path="url(#clip0_1_2)">
<path id="Vector" d="M960 0H0V540H960V0Z" fill="#002233"/>
<path id="Wave" className={scroll ? "active scrolled": "inactive"} d="M0 456L40 443.7C80 431.3 160 406.7 240 392.3C320 378 400 374 480 382C560 390 640 410 720 409.2C800 408.3 880 386.7 920 375.8L960 365V541H920C880 541 800 541 720 541C640 541 560 541 480 541C400 541 320 541 240 541C160 541 80 541 40 541H0V456Z" fill="#0066BB"/>
<path id="Wave1" className={scroll ? "active scrolled": "inactive"} d="M0 456L40 443.7C80 431.3 160 406.7 240 392.3C320 378 400 374 480 382C560 390 640 410 720 409.2C800 408.3 880 386.7 920 375.8L960 365V541H920C880 541 800 541 720 541C640 541 560 541 480 541C400 541 320 541 240 541C160 541 80 541 40 541H0V456Z" fill="#0066DD"/>
<path id="Wave2"  className={scroll ? "active scrolled": "inactive"} d="M0 456L40 443.7C80 431.3 160 406.7 240 392.3C320 378 400 374 480 382C560 390 640 410 720 409.2C800 408.3 880 386.7 920 375.8L960 365V541H920C880 541 800 541 720 541C640 541 560 541 480 541C400 541 320 541 240 541C160 541 80 541 40 541H0V456Z" fill="#0066FF"/>
</g>
<defs>
<clipPath id="clip0_1_2">
<rect width="960" height="540" fill="white"/>
</clipPath>
</defs>
</svg>

     

      
    )
}

export default Svg;
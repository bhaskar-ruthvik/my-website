import React from "react"
import Table from "./Table"
import Skills from "./Skills"
function About(){
    return (
        <div><h1 className="about-head" align="center">About Me.</h1>
                <h1 className="head-rule">--------------------------</h1>
    <div className="row">
    <div className="col-lg-6 table1">
    <Table />
    </div>
    <div className="col-lg-6 paragraph">
    <p className="about-para"> I am a 2nd year undergraduate student who is just getting into the vast world of computer programming! My hobbies include playing Basketball and watching sporting leagues such as the NBA. I am also an enthusiast of Television shows and most of my free time consuming content.</p>
   
    </div>
    </div>
    </div>
     
    )
}
 export default About;
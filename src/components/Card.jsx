import React from "react"
import { propTypes } from "react-bootstrap/esm/Image";


function Card(props){
    return (
        <div class="card edit" >
  <img src={props.src} class="card-img-top" alt="image"></img>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.content}</p>
    <a href={props.url} class="btn btn-outline-primary btn-lg ">View</a>
  </div>
</div>
    )
}

export default Card;
import React from 'react';
import picture from './logo.jpg'
export const Names=(props)=>{
    return(
      <div>
        <div>
          <img id="imagelink" src={picture} alt='picture'/>
        </div>
      <div  id="fire">
        <h1 id="h2">{props.name}<b></b></h1> 
        <h2 id="p1">{props.age}</h2>
      </div>
    </div>  
  );}
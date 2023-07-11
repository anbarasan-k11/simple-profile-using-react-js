import React from 'react';

export const Skill=(props)=>{
  return(
    <div id="skills" >
      <h2 >MY SKILLS</h2>
      <h3 id="skill" >PERSONAL SKILLS</h3> 
        <span  id="list1">
          <ul id="ul" > 
          {props.skillname.map(item=>(<li id="litag">{item} </li>))   } 
          </ul>
          <h3 id="language">LANGUAGE SKILLS</h3>
          <span id="spanprogress">
          <ul id="ul1">
            {props.languagename.map((item,index)=>(<li id="litag1"><p id="ln">{item}</p>
            <progress max="100" value={props.persentage[index]} id="progress"></progress></li>))}
            {/* {props.persentage.map(item=>(<li id="litag1"><progress max="100" value={item} id="progress"></progress></li>))} */}
              {/* <li id="litag1" >
                <p id="ln"> {props.languagename}</p>
                <progress max="100" value={props.persentage} id="progress"></progress>
              </li> */}
            </ul>
            <h2>REFERENCE</h2>
            <h4>ESTELLE DARCY</h4>
            <p>asfdsgfd</p>
            <p>dsfdsf</p>
            <h2>REFERENCE</h2>
            <h4>ESTELLE DARCY</h4>
            <p>asfdsgfd</p>
            <p>dsfdsf</p>
          </span>
                
        </span>

    </div>
  )
}  
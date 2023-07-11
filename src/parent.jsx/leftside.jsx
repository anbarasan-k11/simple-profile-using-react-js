import React from 'react';

import { Skill } from '../component/firstpart/skills.js';
import { Names } from '../component/firstpart/name.js';
const Skills = {
    skillName: ['HTML','CSS','JAVA SCRIPT'],
    languageName: ['TAMIL','ENGLISH'],
    percentage: [90,89],
}
 export const  Left =()=>{
    return(
        <div id="frameset" style={{ height: "1000px"}}>
         <Names name="anbarasan k" age="20 years old/fresher"/>
         <Skill skillname={Skills.skillName} languagename={Skills.languageName} persentage={Skills.percentage}/>   
        </div>
    )
}
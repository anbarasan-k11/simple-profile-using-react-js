import React from 'react';
import { Work } from '../component/secondpart/work.jsx';
import { Education } from '../component/secondpart/education.jsx';
import { Leftsides } from '../component/secondpart/address.jsx';
export const Right=()=>{
    return(
        <div style={{marginleft: "20px",    height: "1000px"}}>
            <Leftsides phonenumber="+91 9790221726" emailid="anbarasank0306@gmail.com" location="49 middle street,valli vagai,tiruvannamalai" />
            <Work/>
            <Education/>
        </div>
    )
}
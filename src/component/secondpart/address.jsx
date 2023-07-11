import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
export const Leftsides=(props)=>{
    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between;',
      };
      const firstdiv={
        height: 255,
        marginleft: 10
      };
return(
    
<div style={firstdiv}>
    <div style={containerStyle}>
        <div className="wide">
            <header style={{fontSize: 30}}><b>PROFILE INFO </b></header>
            <p style={{width: 900, fontSize: 25}}> Personal info and options to manage it. You can make some of this info, like your contact details, visible to others so that they can reach you easily. You can also see a summary of your profiles.</p> 
        </div>
    </div>
    <div id="buttons" style={{margintop: 40, width: "65%",
    marginleft:30,height: "fit-content",display: "flex",
    margintop: 80}} >
        <div id="div" style={{ width:200,  height: 40}}>
            <div>
                <button id="call" style={{textalign:"center", backgroundcolor: "#5e4e4e",
                color:"white"}}>
                    <FontAwesomeIcon icon={faPhone} />
                </button>
            </div>
            <span style={{marginleft: 25,display: "flex",
            justifycontent:" space-between",
            margintop: -5.5}} >
                <p id="phone">{props.phonenumber}</p>
            </span>
        </div>
        <div id="div" style={{ marginleft: "250px",
            marginright: 200, height: 40,
       marginleft: 200,    width: 300,
    margintop: -35,  height: 40}}> 
            <div>
                <button id="email" style={{backgroundcolor:" #5e4e4e"}}>
                <FontAwesomeIcon icon={faEnvelope} />
                </button>
            </div>
            <span style={{marginleft: 1}} >
                <p id="emailid">{props.emailid}</p>
            </span>
        </div>
        <div id="div" style={{ margintop: -.02,marginleft: 465,
            margintop: -40,   height: 45}}>
            <div>
                <button id="location" style={{backgroundcolor: "#5e4e4e",
                    color: "white"}}>
                    <FontAwesomeIcon icon={faMapMarker} />
                </button>
            </div>
            <span >
                <p id="address">{props.location}</p>
            </span>
        </div>
    </div>
</div>
)}

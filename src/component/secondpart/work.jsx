import taskimage from './task.jpg';
import React from 'react';
export const Work =()=>{
    return(
        <span id="work">
                <h2>WORK EXPERIENCE<hr/></h2>
                <span style={{display: "flex", margintop: 40,
                justifycontent: "space-around"}}>
                <span id="yearspan1" style={{padding: 40}}>
                   AUG 2013<br/>
                    MAY 2016<br/><br/><br/><br/><br/>
                    AUG 2013<br/>
                    MAY 2016<br/><br/><br/><br/><br/>
                    AUG 2013<br/>
                    MAY 2016<br/><br/> 
                </span>
                <img src={taskimage} alt="task"/>
                    <span id="workspan" style={{padding: 20}}>
                       <header>SENIOR GRAPHIC DESIGNER</header>
                        <ul>
                            <li>
                                <p>post graduated in graphice desining</p>
                            </li>
                            <li>
                                <p>somethging something</p>
                            </li>
                        </ul>
                        <header>SENIOR GRAPHIC DESIGNER</header>
                        <ul>
                            <li>
                                <p>post graduated in graphice desining</p>
                            </li>
                            <li>
                                <p>somethging something</p>
                            </li>
                        </ul>
                        <header>SENIOR GRAPHIC DESIGNER</header>
                        <ul>
                            <li>
                                <p>post graduated in graphice desining</p>
                            </li>
                            <li>
                                <p>somethging something</p>
                            </li>
                        </ul>
                    </span>
                </span>
                </span>
    )
}
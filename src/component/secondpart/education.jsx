import taskimage1 from './task2.jpg';
export const Education =()=>{
    return(
        <span id="work1">
            <h2>MY EDUCATION<hr/></h2>
            <span style={{display:" flex", padding: 20 ,justifycontent: "space-around",    height: 100}}>
                <span id="yearspan"style={{padding: 10}}>
            
                  AUG 2020 <br/>
                    MAY 2023<br/><br/><br/><br/><br/>
                    
                </span>
                <img src={taskimage1} alt="task"/>
                <span id="coursespan" style={{padding: 20}}>
                    <header id="courseheader">bachelor of science</header>
                    <ul id="courseul">
                        <li id="courseli"> computer science</li>
                    </ul>
            </span><br/><br/> 
        </span>
    </span>

    )
}
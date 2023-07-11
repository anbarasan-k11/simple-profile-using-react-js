import { Left } from './leftside.jsx';
 import { Right } from './rightside.jsx';

export const Fullpage=()=>{
    return(
        <div style={{display: "flex", justifycontent: "space-between",width: "1300px"}}>
            <Left/>
            <Right/>
        </div>
    )
}
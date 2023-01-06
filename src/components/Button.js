

import { useEffect, useState } from "react";
import { ButtonStyled } from "./styles/Button.style";

const Button = ({toggleModel,finished,attempts}) => {
    let chances = 2 - attempts
    //console.log()
    console.log('chances',chances)
     const [tries,triesOver]=useState(false);
     useEffect(()=>{
        if(chances===0){
         console.log('changed')   
        triesOver(true);
        }
     },[chances])

     
   
    return ( <ButtonStyled disabled={tries}  title="Start" onClick={toggleModel}>
         { tries? 'Attempts over' : `${finished?`Try Again ${chances} left `:"Get Started"}` }
    </ButtonStyled> );
}
 
export default Button;
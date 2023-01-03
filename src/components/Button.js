import { ButtonStyled } from "./styles/Button.style";

const Button = ({toggleModel}) => {
    return ( <ButtonStyled title="Start" onClick={toggleModel}>
         Get Started
    </ButtonStyled> );
}
 
export default Button;
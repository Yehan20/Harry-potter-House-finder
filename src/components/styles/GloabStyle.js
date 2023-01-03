import {createGlobalStyle} from 'styled-components'
import image from '../../images/bg.jpg'
const GlobalStyles = createGlobalStyle`


:root{
    --ff-main:'EB Garamond', serif;
}
*,*::before,*::after{
    box-sizing: border-box;
    
}
body{
    margin: 0;

}
#root{
    min-height: 100vh;
    background-image:url(${image});
    background-size: cover;
    background-position: center;
    padding:0;
    font-family: var(--ff-main);
    background-color: #444;
    background-blend-mode: multiply;
}
`

export default GlobalStyles
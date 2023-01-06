import styled from 'styled-components'

export const ButtonStyled = styled.button`
   display:block;
   background-color:${({theme})=>theme.textClr || '#333'};
   outline:3px solid gold;
   color:#fff;
   border:0;
   border-radius:0;
   font-size:1.5rem;
   padding:1em;
   text-transform:uppercase;
   font-family:var(--ff-main);
   font-weight:800;
   cursor:pointer;
   font-style:italic;
   text-align:center;
   margin:0.5em auto;
   transition:all 250ms ease-in;

   &:hover{
      background-color:gold;
      outline:3px solid black;
      color:#333;
   }

   @media(max-width:767px){
      font-size:1rem;
    }
`

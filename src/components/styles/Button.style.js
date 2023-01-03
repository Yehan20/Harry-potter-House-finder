import styled from 'styled-components'

export const ButtonStyled = styled.button`
   display:block;
   background-color:#333;
   outline:3px solid gold;
   color:#fff;
   border:0;
   border-radius:0;
   font-size:2rem;
   padding:1em;
   text-transform:uppercase;
   font-family:var(--ff-main);
   font-weight:800;
   cursor:pointer;
   font-style:italic;
   text-align:center;
   margin:1em auto;
   transition:all 250ms ease-in;

   &:hover{
      background-color:gold;
      outline:3px solid black;
      color:#333;
   }
`

import styled from "styled-components";

export const HeaderStyled = styled.header`

   background-color:${({bg})=>bg};
   padding:0em;
   color:#fff;

   div{
     display:flex;
     display:flex;
     justify-content:space-between;
     align-items:center
   }

   h2{
    font-size:1.7rem;
    margin:0;
    text-transform:uppercase;
    letter-spacing:6px;
    font-weight:800;
  }

  img{
    width:50px;
    border-radius:50%;
  }

  @media(max-width:767px){
     div {
      flex-direction:column;
      text-align:center;
    }
  }
`
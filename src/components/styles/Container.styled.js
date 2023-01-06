import styled from "styled-components";
import lettter from '../../images/letter.jpg'

export const Container = styled.div`
  max-width:1000px;
  width:100%;
  padding:1.1em 1em;
  margin:0 auto;

  h1{
    font-size:3.3rem;
    margin-bottom:0;
    text-align:center;
    color:#fff;
    font-weight:800;
    text-transform:uppercase;

  }

  span{
    color:gold;
  }

  @media(max-width:767px){
   h1{
      font-size:2rem;
    }
  }
`

export const StyledModal= styled.div`
/* The Modal (background) */

     /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */

  
  /* Modal Content/Box */
   div{
    background-color: wheat;
    background-image:url(${lettter});
    background-repeat:no-repeat;
    background-size:cover;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
    background-position:left ;
  }


  h3{
    font-size:1.8rem;
    margin:0;
    font-weight:600;
  }

  button{
     background-color:#222;
     border:0;
     padding:1em;
     color:#fff;
     font-size:1rem;
     font-family:var(--ff-main);
     text-transform:uppercase;
     font-weight:600;
     font-style:italic;
     margin-top:1em;
     cursor:pointer;

     &:hover{
      background:gold;
     }

     &:disabled:hover{
      background:#222;
     }
     &:disabled{
      opacity:0.6;
      cursor:default;
     }
  }


  ul{
    list-style:none;
    padding-left:3em;
    
  }
  li{
    display:flex;
    margin-bottom:1em;
  }
  li:nth-of-type(1){
    padding-top:2em;
  }

  [type="radio"]:checked,
[type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label
{
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    font-family:var(--ff-main);
    font-size:1.5rem;
    font-weight:600;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #ddd;
    border-radius: 100%;
    background: #fff;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
    content: '';
    width: 12px;
    height: 12px;
    background: red;
    position: absolute;
    top: 3px;
    left: 3.2px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
}
[type="radio"]:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}


  /* The Close Button */
  span {
    display:inline-block;
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    background:#222;
    padding:1px 5px;

  }
  
  span:hover,
  .span:focus {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }

  @media(max-width:767px){
    div{
      background-size: 100% 187%;
    }
    ul{
      padding-left:1.5em !important;

    }

    h3{
      font-size:1.4rem
    }

    [type="radio"]:checked + label,
[type="radio"]:not(:checked) + label{
      font-size:1.2rem;
    }
  }

  @media(max-width:767px){

    ul{
      padding-left:0em !important;

    }
    h3{
      font-size:1.1rem;
    }

    [type="radio"]:checked + label,
    [type="radio"]:not(:checked) + label{
          font-size:1rem;
        }
      }

  }
  
 
`

export const StyledHouse = styled.article`
    // border:1px solid red;

    display:flex;
    flex-direction:column;
    text-align-center;
    padding:0.1em;
    
    align-items:center;

    h2{
      font-size:2rem;
      text-transform:uppercase;
      font-weight:600;
      font-style:italic;
      margin:0;
      font-family:var(--ff-main);
    }
    p{
      font-size:1.3rem;
      margin:0;
      text-align:center;
      padding:0 2em;
      font-weight:600;
      margin-top:0.5em;
    
    }
    h3{
      color:${({bg})=>bg[1]}
    }
    img{
      max-width:200px;
      box-shadow:0  0 17.1em 0.1em ${({bg})=>bg[0]};
      border-radius:17%;
      padding:1em;
      width:100%;
      

    }




`

export const StyledDive = styled.div`
  color:#fff;
  font-family:var(--ff-main);
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
   h3{
    font-size:3rem;
    grid-column:1/3;
    margin:0;
    align-items:start;

   }
   p{
    font-size:1.5rem;
    grid-row:2/2;
    grid-column:1/3;
    margin:0;
   }


   span{
    color:${({bg})=>bg};

    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 70px #fff;
   }
   
   


  img{
    max-width:220px;
    grid-column:3/4;
    grid-row:1/3;
    box-shadow:0  0 17.1em 0.1em ${({bg})=>bg};
    border-radius:17%;
    padding:1em;
    margin:0 0 0 auto;
    
  }

  @media(max-width:767px){
    &{
   
      grid-template-columns:1fr 1fr;
      justify-items:center;
      text-align:center;
      gap:1em;
    }
    h3{
      grid-column:1/ span 2;
    }
    img{
      grid-row:3;
      grid-column:1/span 2;
      margin:0 auto;
    }
  }

  @media(max-width:320px){
  
    h3{
      font-size:2rem;
    }

  }
`
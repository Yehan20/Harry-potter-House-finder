import styled from "styled-components";
import lettter from '../../images/letter.jpg'

export const Container = styled.div`
  max-width:1000px;
  width:100%;
  padding:1em;
  margin:0 auto;

  h1{
    font-size:3.3rem;
    text-align:center;
    color:#fff;
    font-weight:800;
    text-transform:uppercase;

  }

  span{
    color:gold;
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
 
`

export const StyledHouse = styled.article`
    border:1px solid red;
    background-color:${({bg})=>bg[1] || '#ccc'};
    display:flex;
    flex-direction:column;
    text-align-center;
`
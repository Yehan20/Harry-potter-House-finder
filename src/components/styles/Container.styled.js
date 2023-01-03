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
    background-positon:center;
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
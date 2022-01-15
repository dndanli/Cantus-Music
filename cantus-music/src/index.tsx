import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  body {
    background-color: rgb(255, 254, 252);
  }

  .hero{
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
  }
  .heading{
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    color: #111111;
  }

  .info{
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 1.2em;
    color: rgba(0,0,0,0.6);
    padding: 1rem;
    text-align: center;
  }

  .home-text-1{
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .get-started{
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    background-color:#C293EB;
    padding: 1em 1em 1em 1em;
    border-radius: .5em;
    cursor: pointer;
    margin-top: 2rem;
  }
  .get-started a{
    text-decoration: none;
    color:rgb(255, 254, 252);
  }

  .registration{
    width: 100%;
    height: 100vh;
    margin-top: 5rem;

  }

  .registration input[type=text]{
    margin-bottom: 2rem;
  }

  .registration input[type=password]{
    margin-bottom: 2rem;
  }

  .registration input[type=submit]{
    margin-bottom: 1rem;

  }

  .login{
    margin-top: 5rem;
  }

  .login input[type=text]{
    margin-bottom: 2rem;
  }

  .login input[type=password]{
    margin-bottom: 2rem;
  }

  .login input[type=submit]{
    margin-bottom: 1rem;
  }

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
  }

  input[type="text"], input[type="password"]{
    border: none;
    appearance: none;
    background: rgb(231, 229, 226);
    padding: .5rem;
    border-radius: .2rem;
    width: 55%;
    margin: 8px;
    box-sizing: border-box;
    font-family: Montserrat, sans-serif;
    font-size: 1rem;
  }
  .submit-btn, .sign-btn{
    border: none;
    appearance: none;
    background: #C293EB;
    color:rgb( 255, 254, 252); 
    padding: .5rem;
    border-radius: .2rem;
    width: 55%;
    margin: 8px;
    box-sizing: border-box;
    font-size: 1rem;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
  }

  .sign-btn{
      display: flex;
      justify-content: center;
      background-color: #999595;
      border: solid 2px #666565;
  }

  .sign-btn a {
    color: rgb( 255, 254, 252);
    text-decoration: none;
  }
  
  input:focus::placeholder{
    color: transparent;
  }

  input::placeholder{
    color:#424242;
    transition: color 0.3s ease;
  }
  
  .reg-questions, .log{
    font-family: Montserrat, sans-serif;
    font-size: 1.3rem;
    width: 55%;
  }

  .question{
    color: #111111;
    font-family: Montserrat, sans-serif;
  }
  .discover{
    padding: 1rem;
    font-family: Montserrat, sans-serif;
  }

  .discover-heading{
    color: #1d191d;
    margin-bottom: .5rem;
    
  }
  .navbar-wrapper{
    position: fixed;
    bottom: 1rem;
    width: 100vw;
    display: flex;
    justify-content: center;
  }
  .header-wrapper{
    width: 100vw;
    margin-bottom:2rem;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

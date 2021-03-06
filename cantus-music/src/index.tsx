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
    background-color: #ffffff;
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
    color: rgba(16, 16, 16, 0.7);
  }

  .info{
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 1.2em;
    color: rgba(16, 16, 16, 0.7);
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
    background-color:rgba(255, 183, 0, 0.9);
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
    background-color:rgba(255, 183, 0, 0.9);
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
      background-color:rgba(255, 183, 0, 0.9);
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
    color:rgba( 255, 254, 252, 0.8); 
    font-family: Montserrat, sans-serif;
    font-size: 1.3rem;
    width: 55%;
  }

  .question{
    color:rgba( 255, 254, 252, 0.8); 
    font-family: Montserrat, sans-serif;
  }
  .discover{
    padding: 1rem;
    font-family: Montserrat, sans-serif;
  }
  .discover-heading{
    color: rgba(16, 16, 16, 0.8);
    margin-bottom: .5rem;
    
  }
  .navbar-wrapper{
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(12px);
    position: fixed;
    padding-top: .5rem;
    bottom: -.2rem;
    height: 5rem;
    width: 100vw;
    display: flex;
    justify-content: center;
  }
  .header-wrapper{
    width: 100vw;
    margin-bottom:2rem;
  }
  .discover-heading-desc{
    color: rgba(16, 16, 16, 0.7);
    margin-bottom: 0.7rem;
  }
  
  .user-menu{
    font-family: Montserrat, sans-serif;
    padding: 1rem;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

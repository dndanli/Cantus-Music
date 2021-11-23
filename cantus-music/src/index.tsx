import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(255, 254, 252);
  }

  .hero{
    display:flex;
    flex-direction: column;
    align-items: center;
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
  }

  .get-started{
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    background-color:#f9b026;
    padding: .1em 1em .1em 1em;
    border-radius: .5em;
    cursor: pointer;
    margin-top: 2em;
  }
  .get-started a{
    text-decoration: none;
    color:rgb(255, 254, 252);
  }

  .registration{
    width: 100%;
    height: 100vh;
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
    background: #f9b026;
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
    width: 55%;
  }

  .question{
    color: #111111;
    font-family: Montserrat, sans-serif;
  }
  .discover{
    font-family: Montserrat, sans-serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

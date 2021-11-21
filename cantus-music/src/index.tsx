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
    font-weight: 300;
    color: rgba(0,0,0,0.6);
  }

  .get-started{
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    color:#111111;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

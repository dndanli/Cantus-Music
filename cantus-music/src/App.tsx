import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

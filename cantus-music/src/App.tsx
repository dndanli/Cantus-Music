import React from "react";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Registration />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

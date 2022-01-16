import React from "react";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Discover from "./Pages/Discover";
import Library from "./Pages/Library";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/discover" element={<Discover />}></Route>
          <Route path="/library" element={<Library />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

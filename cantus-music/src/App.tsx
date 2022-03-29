import React from "react";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import Discover from "./Pages/Discover";
import StyledLibrary from "./Pages/Library.style";
import StyledSearch from "./Pages/Search.style";
import StyledUserProfile from "./Pages/UserProfile.style";

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
          <Route
            path="/library"
            element={<StyledLibrary className="library-page" />}
          ></Route>
          <Route
            path="/search"
            element={<StyledSearch className="search-page" />}
          ></Route>
          <Route
            path="username:1"
            element={<StyledUserProfile className="user-profile" />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

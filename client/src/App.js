import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import SinglePost from "./components/SinglePost";
import Login from "./components/Login";

function App() {
  return (
    <>     
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />  
          <Route path="/posts/:postId" element={<SinglePost/>} />  
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

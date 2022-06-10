import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Navigation from "./Navigation";
import SignUp from "./SignUp";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

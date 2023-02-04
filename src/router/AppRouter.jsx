import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import Home from "../pages/home/Home";
const AppRouter = () => {
  return (
    <>
    <SearchBar/>
    <Routes>
            <Route path="/" element={<Home/>} />

    </Routes>
    <Footer/>
    </>

  );
};

export default AppRouter;

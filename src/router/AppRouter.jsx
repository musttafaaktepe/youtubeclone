import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Home from "../pages/home/Home";
const AppRouter = () => {
  return (
    <>
    <SearchBar/>
    <Routes>
            <Route path="/" element={<Home/>} />

    </Routes>
    </>

  );
};

export default AppRouter;

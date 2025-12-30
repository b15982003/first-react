// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 引入剛剛分開的兩個頁面檔案
import Home from "./Home_temp";
import Detail from "./Detail";

export default function App() {
  return (
    <BrowserRouter basename="/first-react">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detail/:itemId" element={<Detail/>} />
      </Routes>
    </BrowserRouter>
  );
}

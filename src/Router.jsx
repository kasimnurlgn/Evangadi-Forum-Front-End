import React from "react";
import Layout from "./pages/Layout/Layout";
import { Router, Routes } from "react-router-dom";
function AppRouter() {
  return (
    <Routes>
      <Router path="/" element={<Layout/>} />
    </Routes>
  );
}

export default AppRouter;

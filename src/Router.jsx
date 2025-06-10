import React from "react";
import Layout from "./pages/Layout/Layout";
import { Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  );
}

export default AppRouter;

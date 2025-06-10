import React from "react";
import Layout from "./pages/Layout/Layout";
import Landing from "./pages/Landing/Landing";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Landing />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;

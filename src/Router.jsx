import React from "react";
import Layout from "./pages/Layout/Layout";
import Landing from "./pages/Landing/Landing";
import { Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Landing />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;

import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "./components/home";
import Team from "./components/team";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Product from "./components/product";

export default (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/team" element={<Team />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/shop" element={<Product />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

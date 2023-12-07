import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import Navigation from "./components/Navigation";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;

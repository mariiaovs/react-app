import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import Navigation from "./components/Navigation";
import ProductPage from "./pages/ProductPage";
import StartPage from "./pages/StartPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;

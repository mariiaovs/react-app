import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import Navigation from "./components/Navigation";
import ProductPage from "./pages/ProductPage";
import StartPage from "./pages/StartPage";
import ProductsInCategoryPage from "./pages/ProductsInCategoryPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/:category" element={<ProductsInCategoryPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import { Product } from "./components/Product";
import { products } from "./data/products";

function App() {
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <div className="text-2xl font-bold">Products</div>
      {products.map(p => <Product product={p} key={p.id} /> )}      
    </div>
  );
}

export default App;

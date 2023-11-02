import React from "react";
import { Product } from "./components/Product";
// import { products } from "./data/products";
import useProducts from "./hooks/products";

function App() {
  
  const {products, loading, error} = useProducts();

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <div className="text-2xl text-center font-bold">Products</div>
      {loading && <div className="text-center">Loading...</div>}
      {error && <div className="text-center text-red-600">{error}</div>}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default App;

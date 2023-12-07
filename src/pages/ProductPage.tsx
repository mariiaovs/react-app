import React from "react";
import useProducts from "../hooks/products";

function ProductPage() {
  const { products, loading, error } = useProducts();

  debugger;

  return (
    <div className="border py-2 px-4 rounded flex-col items-center mb-2">
      <img src={products[0].image} className="w-1/6" alt={products[0].title} />
      <p>{products[0].title}</p>
      <p className="font-bold">${products[0].price}</p>
      <p>{products[0].description}</p>
      <p>
        Rate:{" "}
        <span style={{ fontWeight: "bold" }}>{products[0]?.rating?.rate}</span>
      </p>
    </div>
  );
}

export default ProductPage;

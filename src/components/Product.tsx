import React, { useState } from "react";
import { IProduct } from "../models";
import { Link } from "react-router-dom";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);

  const btnBgClassName = details ? "bg-blue-400" : "bg-yellow-400";
  const btnClassName = `py-2 px-4 border hover:opacity-50 ${btnBgClassName}`;

  return (
    <div className="border py-2 px-4 rounded flex-col items-center mb-2">
      <Link to="/product">
        <img src={product.image} className="w-1/6" alt={product.title} />
      </Link>
      <Link to="/product">
        <p>{product.title}</p>
      </Link>
      <p className="font-bold">${product.price}</p>
      {details && <p>{product.description}</p>}
      <button className={btnClassName} onClick={() => setDetails(!details)}>
        {details ? "Hide details" : "Show details"}
      </button>
      <p>
        Rate:{" "}
        <span style={{ fontWeight: "bold" }}>{product?.rating?.rate}</span>
      </p>
    </div>
  );
}

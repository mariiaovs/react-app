import React from "react";
import useProduct from "../hooks/product";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { IProduct } from "../models";

interface ProductFullProps {
    product: IProduct;
  }

function ProductFull({ product }: ProductFullProps) {
    
  return (
    <div className="border py-2 px-4 rounded flex-col items-center mb-2">            
      <p>{product.title}</p>
      <img src={product.image} className="w-1/6" alt={product.title} />
      <p>{product.title}</p>
      <p className="font-bold">${product.price}</p>
      <p>{product.description}</p>
      <p>
        Rate:{" "}
        <span style={{ fontWeight: "bold" }}>{product?.rating?.rate}</span>
      </p>
    </div>
  );
}

export default ProductFull;

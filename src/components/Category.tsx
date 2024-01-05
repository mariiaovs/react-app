import React, { useState } from "react";
import { ICategory } from "../models";
import { Link } from "react-router-dom";

interface CategoryProps {
  category: ICategory;
}

export function Category({ category }: CategoryProps) {
  return (
    <div className="border py-2 px-4 rounded flex-col items-center mb-2">
      {/* <Link to={`/products/${product.id}`}>
        <img src={product.image} className="w-1/6" alt={product.title} />
      </Link> */}

      <h2 className="font-bold">${category}</h2>
    </div>
  );
}

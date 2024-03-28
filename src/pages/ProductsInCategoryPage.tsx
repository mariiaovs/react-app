import React, { useContext } from "react";
import useProducts from "../hooks/products";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { CreateProduct } from "../components/CreateProduct";
import { Modal } from "../components/Modal";
import { Product } from "../components/Product";
import { ModalContext } from "../context/ModalContext";
import { IProduct } from "../models";
import useProductInCategorie from "../hooks/products-categorie";

function ProductsInCategoryPage() {
  const { category, products, loading, error } = useProductInCategorie();

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <div className="text-2xl text-center font-bold">
        Products in {category}
      </div>
      {loading && <Loader />}
      {error && <ErrorMessage errorMessage={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductsInCategoryPage;

import React from "react";
import useProduct from "../hooks/product";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import ProductFull from "../components/ProductFull";

function ProductPage() {
  const { product, loading, error } = useProduct();

  return (
    <div className="border py-2 px-4 rounded flex-col items-center mb-2 mt-16">
      {loading && <Loader />}
      {error && <ErrorMessage errorMessage={error} />}
      {product && <ProductFull product={product} />}
    </div>
  );
}

export default ProductPage;

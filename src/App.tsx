import React from "react";
import { Product } from "./components/Product";
// import { products } from "./data/products";
import useProducts from "./hooks/products";
import { Loader } from "./components/Loader";
import { ErrorMessage } from "./components/ErrorMessage";
import { CreateProduct } from "./components/CreateProduct";
import { Modal } from "./components/Modal";

function App() {
  
  const {products, loading, error} = useProducts();

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <div className="text-2xl text-center font-bold">Products</div>
      {loading && <Loader />}
      {error && <ErrorMessage errorMessage={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      <Modal title="Create new product">
        <CreateProduct />
      </Modal>
    </div>
  );
}

export default App;

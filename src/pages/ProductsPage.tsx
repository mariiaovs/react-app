import React, { useContext } from "react";
import useProducts from "../hooks/products";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { CreateProduct } from "../components/CreateProduct";
import { Modal } from "../components/Modal";
import { Product } from "../components/Product";
import { ModalContext } from "../context/ModalContext";
import { IProduct } from "../models";

function ProductsPage() {
  const { products, loading, error, addProduct } = useProducts();

  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  console.log(products);

  return (
    <div className="container mx-auto max-w-2xl pt-5 mt-16">
      <button
        className="fixed top-5 left-5 bg-yellow-400 py-2 px-4 mb-10 mt-10 border hover:opacity-50"
        onClick={open}
      >
        Create new product
      </button>
      <div className="text-2xl text-center font-bold">Products</div>
      {loading && <Loader />}
      {error && <ErrorMessage errorMessage={error} />}
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
      {modal && (
        <Modal title="Create new product" onClose={close}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
    </div>
  );
}

export default ProductsPage;

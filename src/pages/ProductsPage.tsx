import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import Product from "../components/Product";
import "react-toastify/dist/ReactToastify.css";
import { useProducts } from "../hooks/products";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import CreateProduct from "../components/CreateProduct";
import { IProduct } from "../models";
import { ModalContext } from "../context/ModalContext";

const ProductsPage = () => {
  const { products, loading, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl p-5 pt-[7rem]">
      <button
        onClick={() => open()}
        className="w-fit mb-8 rounded-lg py-3 px-5 bg-[#ffdd2d]"
      >
        Add product
      </button>
      <ToastContainer />
      {loading && <Loader />}
      {products.map((item) => (
        <Product key={item.id} product={item} />
      ))}
      {modal && (
        <Modal onClose={() => close()} title="Create new product">
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
    </div>
  );
};

export default ProductsPage;

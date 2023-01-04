import axios from "axios";
import React, { useState } from "react";
import { IProduct } from "../models";

const productData: IProduct = {
  title: "test product",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 4,
    count: 234,
  },
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (value.trim().length === 0) {
      setError("Please enter title");
      return;
    }

    productData.title = value;

    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );

    const newProduct = {
      ...response.data,
      rating: {
        rate: 3,
        count: 123,
      },
    };

    onCreate(newProduct);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={submitHandler} className="flex flex-col">
        <input
          type="text"
          className="border rounded-lg py-2 px-3 outline-0"
          placeholder="Enter product title"
          value={value}
          onChange={changeHandler}
        />
        {error && <p className="text-[red] py-2 px-1">{error}</p>}
        <button
          type="submit"
          className="w-fit mt-5 rounded-lg py-2 px-10 bg-[#ffdd2d]"
        >
          Create
        </button>
      </form>
    </>
  );
};

export default CreateProduct;

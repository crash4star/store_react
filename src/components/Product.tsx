import React, { useState } from "react";
import { IProduct } from "../models";
import { StarIcon } from "@heroicons/react/24/solid";

interface ProductProps {
  product: IProduct;
}

const Product = (props: ProductProps) => {
  const [details, setDetails] = useState(false);
  const { title, price, image, description, category, rating } = props.product;
  const btnBgClassName = details ? "border-[#ddd]" : "border-[#333]";
  const btnClasses = [
    "w-fit mt-5 border rounded-lg py-2 px-10",
    btnBgClassName,
  ];

  return (
    <div className="flex items-start w-full mb-10 bg-[#fff] p-10 rounded-2xl shadow-2xl">
      <img className="w-[10rem] mr-10" src={image} alt="" />
      <div>
        <span className="text-xs bg-[#ddd] py-1 px-2 rounded-[50px]">
          {category}
        </span>
        <h3 className="mt-3 mb-3 font-medium text-xl">{title}</h3>
        <div className="flex mb-3">
          <div className="flex mr-5 text-sm">
            <StarIcon className="h-5 w-5 mr-1 text-[#ffdd2d]" />
            <p>{rating?.rate}/5</p>
          </div>
          <p className="text-sm">Buy {rating?.count}</p>
        </div>
        <h3 className="mt-3 mb-3 font-medium text-3xl">$ {price}</h3>
        {details && <p className="text-sm">{description}</p>}
        <button
          onClick={() => setDetails(!details)}
          className={btnClasses.join(" ")}
        >
          {details ? "Hide details" : "Show details"}
        </button>
      </div>
    </div>
  );
};

export default Product;
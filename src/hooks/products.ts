import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import { IProduct } from "../models";

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);

  const addProduct = (product: IProduct) => {
    setProducts(prev => [...prev, product]);
  };

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products?limit=5"
      );
      setProducts(response.data);
      setLoading(false);
    } catch (e) {
      const errorMessage = e as AxiosError;
      const {message} = errorMessage;
      setLoading(false);
      ErrorMessage(message);
      
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, addProduct };
};
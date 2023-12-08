import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { IProduct } from "../models";

export default function useProduct() {
  // also you may use default object
  
  // const [product, setProduct] = useState<IProduct>(
  //     {
  //       "id": 1,
  //       "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //       "price": 109.95,
  //       "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //       "category": "men's clothing",
  //       "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //       "rating": {
  //           "rate": 3.9,
  //           "count": 120
  //       }
  //   }
  // );
  const [product, setProduct] = useState<IProduct>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchProduct() {
    try {
      setError("");
      const response = await axios.get<IProduct>(
        "https://fakestoreapi.com/products/1"
      );
      setProduct(response.data);
      setLoading(false);
    } catch (e) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return { product, loading, error };
}

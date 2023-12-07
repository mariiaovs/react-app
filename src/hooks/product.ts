import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { IProduct } from "../models";

export default function useProduct() {
  const [product, setProduct] = useState<IProduct>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchProduct() {
    try {
      setError("");
      setLoading(true);
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

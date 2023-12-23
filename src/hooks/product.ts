import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useParams } from "react-router-dom";
import { IProduct } from "../models";

export default function useProduct() {
  const [product, setProduct] = useState<IProduct>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();

  async function fetchProduct() {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<IProduct>(
        `https://fakestoreapi.com/products/${id}`
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

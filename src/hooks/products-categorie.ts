import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { IProduct } from "../models";
import { useParams } from "react-router-dom";

export default function useProductInCategorie() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { category } = useParams();

  console.log(useParams());

  async function fetchProductsInCategory() {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<IProduct[]>(
        `https://fakestoreapi.com/products/category/${category}`
      );
      setProducts(response.data);
      setLoading(false);
    } catch (e) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProductsInCategory();
  }, []);

  console.log(category, products);

  return { category, products, loading, error };
}

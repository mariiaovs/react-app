import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { ICategory } from "../models";

export default function useCategories() {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchCategories() {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<ICategory[]>(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories(response.data);
      setLoading(false);
    } catch (e) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, loading, error };
}

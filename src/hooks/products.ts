import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { IProduct } from "../models";

export default function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
  
    async function fetchProducts() {
      try {
        setError('');
        setLoading(true);
        const response = await axios.get<IProduct[]>(
          "https://fakestoreapi.com/products?limit=5"
        );
        setProducts(response.data);
        setLoading(false);
      } catch(e) {
        const error = e as AxiosError;      
        setLoading(false);
        setError(error.message);
      }
    }
  
    useEffect(() => {
      fetchProducts();
    }, []);

    return {products, loading, error};
} 
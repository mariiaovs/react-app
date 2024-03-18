import React, { useState } from "react";
import axios from "axios";
import { ErrorMessage } from "./ErrorMessage";

export function LoginForm() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (value.trim().length === 0) {
      setError("Please enter valid title");
      return;
    }
    /* 
    productData.title = value;
    const response = await axios.post<IProduct>(
      "https://fakestoreapi.com/products",
      productData
    );
    onCreate(response.data); */
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-none"
        placeholder="Enter product title"
        value={value}
        onChange={changeHandler}
      />
      {error && <ErrorMessage errorMessage={error} />}
      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-400 hover:opacity-50"
      >
        Create
      </button>
    </form>
  );
}

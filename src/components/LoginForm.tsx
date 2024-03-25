import React, { useState } from "react";
import axios from "axios";
import { ErrorMessage } from "./ErrorMessage";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      // Assuming the API returns a token upon successful login
      const token = data.token;
      // Store the token in localStorage or sessionStorage
      localStorage.setItem("token", token);

      // Redirect or do something else upon successful login
    } catch (error) {
      const errorMessage =
        typeof error === "string" ? error : "An unknown error occurred";
      setError(errorMessage);
    }
  };

  /* const submitHandler = async (event: React.FormEvent) => {
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
    onCreate(response.data); 
  };*/

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-none"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-none"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <ErrorMessage errorMessage={error} />}
      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-400 hover:opacity-50"
      >
        Log in
      </button>
    </form>
  );
}

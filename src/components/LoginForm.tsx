import React, { useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const { login } = useAuth();

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

      const token = data.token;

      localStorage.setItem("token", token);

      login();

      navigate("/");
    } catch (error) {
      const errorMessage =
        typeof error === "string" ? error : "An unknown error occurred";
      setError(errorMessage);
    }
  };

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

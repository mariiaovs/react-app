import React from "react";
import useCategories from "../hooks/categories";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { Category } from "../components/Category";

function StartPage() {
  const { categories, loading, error } = useCategories();

  return (
    <div>
      <h1 className="text-5xl text-center font-bold mx-20 my-20">
        Welcome to our shop!
      </h1>
      <div className="flex gap-5 justify-center">
        {loading && <Loader />}
        {error && <ErrorMessage errorMessage={error} />}
        {categories.map((category, index) => (
          <Category category={category} key={index} />
        ))}
      </div>
    </div>
  );
}

export default StartPage;

import React from "react";
import useCategories from "../hooks/categories";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { Category } from "../components/Category";
import { Link } from "react-router-dom";

function StartPage() {
  const { categories, loading, error } = useCategories();

  let categoriesBig: string[] = [];

  for (let i = 0; i < categories.length; i++) {
    let categoryArr: string[] = categories[i].split("");
    categoryArr[0] = categoryArr[0].toUpperCase();
    let categoryBig: string = categoryArr.join("");
    categoriesBig.push(categoryBig);
  }

  return (
    <div className="mt-16">
      <h1 className="text-5xl text-center font-bold mx-20 my-20">
        Welcome to our shop!
      </h1>
      <div className="flex gap-5 justify-center">
        {loading && <Loader />}
        {error && <ErrorMessage errorMessage={error} />}
        {categoriesBig.map((categoryBig, index) => (
          <div>
            <Link to={`/${categories[index]}`}>
              <Category category={categoryBig} key={index} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StartPage;

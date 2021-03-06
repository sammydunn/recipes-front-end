import React, { useEffect, useState } from "react";
import classes from "./Recipes.module.css";
import { useParams } from "react-router-dom";
import RecipeIngredients from "../RecipeIngredients/RecipeIngredients";
import { Link } from "react-router-dom";

export default function Recipes() {
  const { user_name } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`https://backend-recipes-api.herokuapp.com/recipes`)
      .then((response) => {
        if (response.ok) return response.json();
        if (!response.ok) {
          throw Error("Usernamer/Password incorrect");
        } else return response.json();
      })
      .then((response) => setRecipes(response))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={classes.grid_container}>
      {console.log(recipes)}
      {recipes &&
        recipes.map((recipe) => (
          <div key={recipe.recipe_id} className={classes.child_grid_container}>
            <div className={classes.gallery_item}>
              <div className={classes.image_container}>
                <img src={recipe.recipe_image} alt="recipe" />
              </div>
              <div className={classes.text}>
                <RecipeIngredients recipe_id={recipe.recipe_id} />
              </div>
            </div>
            <div className={classes.details}>
              <h1>{recipe.recipe_name}</h1>
              <p>{recipe.recipe_description}</p>
              <Link to={`/recipe/${recipe.recipe_name}/${recipe.recipe_id}`}>
                <button className={classes.view_button}>
                  View Recipe
                </button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}

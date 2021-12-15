import React, { useEffect, useState } from "react";
import classes from "./RecipeIngredients.module.css";

export default function RecipeIngredients(props) {
  const [user_id, set_user_id] = useState(localStorage.getItem("user_id"));
  const [edit, setEdit] = useState(false);
  const [recipeIngredients, setRecipeIngredients] = useState([]);

  useEffect(() => {
    fetch(`https://backend-recipes-api.herokuapp.com/recipe-ingredient/${props.recipe_id}`)
      .then((response) => {
        if (response.ok) return response.json();
        if (!response.ok) {
          throw Error("Usernamer/Password incorrect");
        } else return response.json();
      })
      .then((response) => setRecipeIngredients(response))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (recipeIngredients < 1) {
    return <div>loading..</div>;
  }

  if (user_id == recipeIngredients[0].user_id) {
    return (
      <div>
        {edit ? (
          <div className={classes.container}>
            {console.log(recipeIngredients)}
            {recipeIngredients.map((ingredient) => (
              <div className={classes.ingredients}>
                <p>
                  {ingredient.amount} {ingredient.measurement_name}{" "}
                  {ingredient.ingredient_name}
                </p>
                {console.log("if", user_id, recipeIngredients.user_id)}
              </div>
            ))}
          </div>
        ) : (
          <div className={classes.container}>
            {console.log(recipeIngredients)}
            {recipeIngredients.map((ingredient) => (
              <div className={classes.ingredients}>
                <p>
                  {ingredient.amount} {ingredient.measurement_name}{" "}
                  {ingredient.ingredient_name}
                </p>
                {console.log("if", user_id, recipeIngredients.user_id)}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={classes.container}>
      {console.log(recipeIngredients)}
      {recipeIngredients.map((ingredient) => (
        <div className={classes.ingredients}>
          <p>
            {ingredient.amount} {ingredient.measurement_name}{" "}
            {ingredient.ingredient_name}
          </p>
          {console.log("if", user_id, recipeIngredients.user_id)}
        </div>
      ))}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import classes from "./Recipe.module.css";

export default function Recipe(props) {
  const [recipe, setRecipe] = useState([]);
  const [user_id, set_user_id] = useState(localStorage.getItem("user_id"));

  useEffect(() => {
    fetch(`https://backend-recipes-api.herokuapp.com/recipes/${props.recipe_id}`)
      .then((response) => {
        if (response.ok) return response.json();
        if (!response.ok) {
          throw Error("Usernamer/Password incorrect");
        } else return response.json();
      })
      .then((response) => setRecipe(response))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (recipe < 1) {
    return <div>loading...</div>;
  }
  if (user_id == recipe[0].user_id) {
    return (
      <div className={classes.top_container}>
        <img src={recipe[0].recipe_image} alt="" />
        <div className={classes.text}>
          <h1>{recipe[0].recipe_name}</h1>
          <p>{recipe[0].recipe_description}</p>
        </div>
        {console.log(recipe)}
      </div>
    );
  }

  return (
    <div className={classes.top_container}>
    <img src={recipe[0].recipe_image} alt="" />
    <div className={classes.text}>
      <h1>{recipe[0].recipe_name}</h1>
      <p>{recipe[0].recipe_description}</p>
    </div>
    {console.log(recipe)}
  </div>
  );
}

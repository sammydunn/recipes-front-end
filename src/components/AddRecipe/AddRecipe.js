import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AddIngredients from "../AddIngredients/AddIngredients";
import classes from "./AddRecipe.module.css";

export default function AddRecipe(props) {
  let history = useHistory();
  const [body, setBody] = useState({
    user_id: localStorage.getItem("user_id"),
    recipe_name: "",
    recipe_description: "",
    recipe_image: "",
  });

  const [recipe_id, setRecipe_id] = useState("");

  function getHeaders() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return headers;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setBody({
      ...body,
      [name]: value,
    });
  }

  function handleClick(e) {
    props.setAdd(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(body);
    fetch(`https://backend-recipes-api.herokuapp.com/recipe`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(body),
    })
      .then(function (response) {
        return response.json();
      })
      .then((response) => response.insertId)
      .then((insertId) =>
        history.push(`/recipe/${props.user_name}/${insertId}`)
      );
  }

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
        <div onClick={handleClick}>X</div>
        <label htmlFor="recipe_name">Name of Recipe:</label>
        <input
          type="text"
          name="recipe_name"
          onChange={handleChange}
          value={body.recipe_name}
        />
        <label htmlFor="recipe_description">Recipe Description:</label>
        <textarea
          type="text"
          name="recipe_description"
          onChange={handleChange}
          value={body.recipe_description}
        />
        <label htmlFor="recipe_image">
          URL Image of Recipe (Hot Dogs will be used by Default):
        </label>
        <input
          type="text"
          name="recipe_image"
          onChange={handleChange}
          value={body.recipe_image}
        />
        <input type="submit" />
        {console.log(body)}
      </form>
    </div>
  );
}

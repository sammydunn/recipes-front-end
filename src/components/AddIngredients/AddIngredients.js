import { useEffect, useState } from "react";
import classes from "./AddIngredients.module.css";

export default function AddIngredients(props) {
  const [body, setBody] = useState({
    recipe_id: props.recipe_id,
    ingredient_id: "",
    measurement_id: "",
    amount: "",
  });

  const [ingredients, setIngredients] = useState([]);
  const [measurements, setMeasurments] = useState([]);

  useEffect(function () {
    fetch(`https://backend-recipes-api.herokuapp.com/ingredients`)
      .then((response) => {
        if (response.ok) return response.json();
        if (!response.ok) {
          throw Error("Usernamer/Password incorrect");
        } else return response.json();
      })
      .then((response) => setIngredients(response));

      fetch(`https://backend-recipes-api.herokuapp.com/measurements`)
      .then((response) => {
        if (response.ok) return response.json();
        if (!response.ok) {
          throw Error("Usernamer/Password incorrect");
        } else return response.json();
      })
      .then((response) => setMeasurments(response));
  }, []);
  return (
    <div>
      <form>
        <select name="ingredient_id" value={body.ingredient_id}>
          {ingredients.map((ing) => (
            <option key={ing.ingredient_id} value={ing.ingredient_id}>
              {ing.ingredient_name}
            </option>
          ))}
        </select>
        <select name="measurement_id" value={body.measurement_id}>
          {measurements.map((m) => (
            <option key={m.measurement_id} value={body.measurement_id}>
              {m.measurement_name}
            </option>
          ))}
        </select>
        {console.log(ingredients)}
      </form>
    </div>
  );
}

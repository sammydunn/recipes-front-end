import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AddRecipe from "../../components/AddRecipe/AddRecipe";
import UserRecipe from "../../components/UserRecipes/UserRecipe";
import classes from "./Dashboard.module.css";

export default function Dashboard() {
  const { user_name } = useParams();
  const [add, setAdd] = useState(false)

  function handleClick(e){
    setAdd(true)
  }

  return (
    <div>
      {add
      ?<AddRecipe user_name={user_name} setAdd={setAdd}/>
      :null
      }
      <div className={classes.container}>hello {user_name}</div>
      <button onClick={handleClick}>Add Recipe</button>
      <UserRecipe />
    </div>
  );
}

import React from "react";
import Recipes from "../../components/Recipes/Recipes";
import classes from "./HomePage.module.css";
import Login from "../../components/Login/Login";

export default function HomePage() {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.left}>
          <div className={classes.title}>
            <h1>Breakfast, Lunch</h1>
            <h1>and Dinner</h1>
          </div>
          <div className={classes.sub_title}>
              
            <p>Save your Recipes and Instructions</p>
            <p>Share youre recipes with others</p>
            <p>Savor the experience</p>
          </div>
        </div>

        <div className={classes.right}>
          <Login />
        </div>
      </div>
      <Recipes />
    </div>
  );
}

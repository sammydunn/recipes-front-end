import React, { useState } from "react";
import Recipes from "../../components/Recipes/Recipes";
import classes from "./HomePage.module.css";
import Login from "../../components/Login/Login";
import NewUser from "../../components/NewUser/NewUser";
import Search from "../../components/Search/Search";

export default function HomePage() {
  const [register, setRegister] = useState(false)
  const [searh, setSearch] = useState(false)

  function handleRegister(){
    setRegister(!register)
  }

  return (
    <div>
      <Search setSearch={setSearch}/>
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
          {
            !register
              ?<Login />
              :<NewUser/>
          }
          <div className={classes.register}>
            {
              !register
              ? <div>
                  <p>Not a member?</p>
                  <button onClick={handleRegister}>Sign Up</button>
                </div> 
              :<button className={classes.login} onClick={handleRegister}>Login</button>
            }
          </div>
        </div>
      </div>
      <Recipes />
    </div>
  );
}

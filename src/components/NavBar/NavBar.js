import React from "react";
import classes from "./NavBar.module.css";
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div className={classes.container}>
      <Link exact="true" to="/">
        <div className={classes.logo}>
          <p>BL</p>
          <p>+D</p>
        </div>
      </Link>
    </div>
  );
}

      // <div>
      //   <Link to='/recipes'>Recipes</Link>
      // </div>
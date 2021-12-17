import React, { useState } from "react";
import classes from "./Login.module.css";
import { useHistory } from "react-router-dom";

export default function Login() {
  let history = useHistory();

  const [body, setBody] = useState({
    user_name: "",
    user_password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setBody({
      ...body,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(body);
    fetch(`https://backend-recipes-api.herokuapp.com/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then(async (response) => {
        if (response.ok) return response.json();
        if (!response.ok) {
          const error = await response.text();
          throw Error(error);
        } else return response.json();
      })
      .then((response) => {
        localStorage.setItem("user_id", response.user_id);
        localStorage.setItem("loggedIn", "true");
        return response.user_name;
      })
      .then((user_name) => {
        history.push("/dashboard/" + user_name);
      })
      .catch((error) => console.log("this", error.message));
  }

  return (
    <div className={classes.container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="user_name">UserName:</label>
        <input
          required
          type="text"
          name="user_name"
          onChange={handleChange}
          value={body.user_name}
        />
        <label htmlFor="user_password">Password:</label>
        <input
          required
          type="password"
          name="user_password"
          onChange={handleChange}
          value={body.user_password}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

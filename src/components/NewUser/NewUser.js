import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import classes from './NewUser.module.css'

export default function NewUser() {

    let history = useHistory();

    const [body, setBody] = useState({
      user_name: "",
      user_password: "",
      email: ""
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
      fetch(`https://backend-recipes-api.herokuapp.com/newuser`, {
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
            <h1>Register</h1>
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
                <label htmlFor="user_password">Email:</label>
                <input
                required
                type="email"
                name="email"
                onChange={handleChange}
                value={body.email}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

import React, { useState } from 'react'
import classes from './Search.module.css'

export default function Search(props) {
    
    const [params, setParams] = useState("")

    const [recipes, setRecipes] = useState([])

    function handleChange(e){
        setParams(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${params}&addRecipeInformation=true&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then((response) => {
          if (response.ok) return response.json();
          if (!response.ok) {
            throw Error("Usernamer/Password incorrect");
          } else return response.json();
        })
        .then((response) => setRecipes(response.results))
        .catch((err) => {
          console.log(err);
        });
    }

    return (
        <div className={classes.container}>
            <p>Search Recipes with Spoonacular</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search parameters"></label>
                <input onChange={handleChange} value={params} />
                <button>Search</button>
                {console.log(params)}
                {console.log(recipes)}
            </form>
            {recipes
            ?<div className={classes.grid}>
                {recipes.map(recipe => (
                    <div key={recipe.id}>
                        <a href={recipe.sourceUrl}><img src={recipe.image}></img></a>
                        <a href={recipe.sourceUrl}><h4>{recipe.title}</h4></a>
                    </div>
                ))}
            </div>
            :null
            }
        </div>
    )
}

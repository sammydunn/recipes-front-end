import React from 'react'
import classes from './RecipePage.module.css'
import Recipe from '../../components/Recipe/Recipe'
import { useParams } from "react-router-dom";
import RecipeIngredients from '../../components/RecipeIngredients/RecipeIngredients';

export default function RecipePage() {
    const { recipe_name, recipe_id } = useParams();
    
    return (
        <div className={classes.container}>
            <Recipe recipe_name={recipe_name} recipe_id={recipe_id} />
            <RecipeIngredients recipe_id={recipe_id} />
        </div>
    )
}

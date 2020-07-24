import React from "react";

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div>
            <h1>{title}</h1>
            <o>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </o>
            <p>{calories}</p>
            <img src={image} alt=""/>
        </div>
    )
}

export default Recipe;
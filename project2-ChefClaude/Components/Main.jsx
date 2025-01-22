import React from "react"
export default function Main(){

    let [ingredients, setIngredients] = React.useState([])

    function handleSubmit(event){
        //to prevent default behaviour of the submit event of the submit tag (which it rerun the page when submitting the form)
        event.preventDefault() 
        let formData = new FormData(event.currentTarget) 
        /** 
        *   this is an object of key value pair of the form and its value(data written in it)
        *   i used the currentTarget instead of target because in froms someone can click on the button 
        *   which the event wont trigger the submit so we need to access the parent element which is the form elemnt
        */
        let newIngredient = formData.get("ingredient")
        setIngredients((ingredients) => [...ingredients, newIngredient])
    }
    const ingredientListItems = ingredients.map((ingredient) =>
        <li key = {ingredient}>{ingredient}</li>
    )
    return(
        <main>
            <form onSubmit  = {handleSubmit}className="add-ingredient-form">
                <input className="input-field"
                    type='text'
                    placeholder='e.g Tomato'
                    aria-label="Add Ingredient"
                    name = "ingredient"
                />
                <button className="button-add">+ Add ingredient</button>
            </form>
            <ul className="ingredients">
                {ingredientListItems}
            </ul>
        </main>
    )
}
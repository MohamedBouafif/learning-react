import React from "react";
export default function Main() {
    let [ingredients, setIngredients] = React.useState([]);
 
    // THIS IS THE IMPERATIVE VERSION OF HUNDLING FORMS :
    // function handleSubmit(event) {
    //     //to prevent default behaviour of the submit event of the submit tag (which it rerun the page when submitting the form)
    //     event.preventDefault();
    //     let formEl = event.currentTarget;
    //     let formData = new FormData(formEl);
    //     /**
    //      *   this is an object of key value pair of the form and its value(data written in it)
    //      *   i used the currentTarget instead of target because in froms someone can click on the button
    //      *   which the event wont trigger the submit so we need to access the parent element which is the form elemnt
    //      */
    //     let newIngredient = formData.get("ingredient");
    //     setIngredients((ingredients) => [...ingredients, newIngredient]);
    //     formEl.reset() 
    // }


    const ingredientListItems = ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    ));

    //this is the declarative way and i dont know why it doesnt work 
    function addIngredient(formData) {
        
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    return (
        <main>
            {/**
       *by default the method to send the data is GET (not protected)
       *in the opposiete side the POST method keeps the data in the body of the post request
       *and doesnt let it appear in the url 
       */
            }
            <form action = {addIngredient} className="add-ingredient-form">
                <input
                    className="input-field"
                    type="text"
                    placeholder="e.g Tomato"
                    aria-label="Add Ingredient"
                    name="ingredient" //to get the data from the dataForm object
                />
                {/* the button inside a form has a type by default  = submit */}
                <button className="button-add">+ Add ingredient</button>
            </form>
            <ul className="ingredients">{ingredientListItems}</ul>
        </main>
    );
}

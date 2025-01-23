import React from "react";
export default function Main() {
  let [ingredients, setIngredients] = React.useState([]);
  let [receipeShown, setReceipeShown] = React.useState(false);
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
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }
  function handleClick() {
    setReceipeShown((prevShown) => !prevShown);
  }
  return (
    <main>
      {/**
       *   by default the method to send the data is GET (not protected)
       *   in the opposiete side the POST method keeps the data in the body of the post request
       *   and doesnt let it appear in the url
       */}
      <form action={addIngredient} className="add-ingredient-form">
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
      {ingredients.length ? (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients">{ingredientListItems}</ul>
          {ingredients.length >= 3 ? (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick = {handleClick}>Get a recipe</button>
            </div>
          ) : null}
        </section>
      ) : null}
      {receipeShown ? (
        <section>
          <h2>Chef Claude Recommends:</h2>
          <article className="suggested-recipe-container" aria-live="polite">
            <p>
              Based on the ingredients you have available, I would recommend
              making a simple a delicious <strong>Beef Bolognese Pasta</strong>.
              Here is the recipe:
            </p>
            <h3>Beef Bolognese Pasta</h3>
            <strong>Ingredients:</strong>
            <ul>
              <li>1 lb. ground beef</li>
              <li>1 onion, diced</li>
              <li>3 cloves garlic, minced</li>
              <li>2 tablespoons tomato paste</li>
              <li>1 (28 oz) can crushed tomatoes</li>
              <li>1 cup beef broth</li>
              <li>1 teaspoon dried oregano</li>
              <li>1 teaspoon dried basil</li>
              <li>Salt and pepper to taste</li>
              <li>
                8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)
              </li>
            </ul>
            <strong>Instructions:</strong>
            <ol>
              <li>
                Bring a large pot of salted water to a boil for the pasta.
              </li>
              <li>
                In a large skillet or Dutch oven, cook the ground beef over
                medium-high heat, breaking it up with a wooden spoon, until
                browned and cooked through, about 5-7 minutes.
              </li>
              <li>
                Add the diced onion and minced garlic to the skillet and cook
                for 2-3 minutes, until the onion is translucent.
              </li>
              <li>Stir in the tomato paste and cook for 1 minute.</li>
              <li>
                Add the crushed tomatoes, beef broth, oregano, and basil. Season
                with salt and pepper to taste.
              </li>
              <li>
                Reduce the heat to low and let the sauce simmer for 15-20
                minutes, stirring occasionally, to allow the flavors to meld.
              </li>
              <li>
                While the sauce is simmering, cook the pasta according to the
                package instructions. Drain the pasta and return it to the pot.
              </li>
              <li>
                Add the Bolognese sauce to the cooked pasta and toss to combine.
              </li>
              <li>
                Serve hot, garnished with additional fresh basil or grated
                Parmesan cheese if desired.
              </li>
            </ol>
          </article>
        </section>
      ) : null}
    </main>
  );
}

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");

const ingredientsItems = ingredients.map((el) => {
  const ingredientListItemEl = document.createElement("li");
  ingredientListItemEl.classList.add("item");
  ingredientListItemEl.textContent = el;

  return ingredientListItemEl;
});

ingredientsListRef.append(...ingredientsItems);

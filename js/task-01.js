const categoriesListRef = document.querySelector("ul");

const categories = [...categoriesListRef.children];

// FIRST OPTION

/*
*function makeCategoriesInfo(categories) {
    for (const category of categories) {
    const categoryTitle = category.firstElementChild.textContent;
    const numberOfCategoryElements = category.lastElementChild.children.length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${numberOfCategoryElements}`);
  }
} */

//SECOND OPTION

function makeCategoriesInfo(categories) {
  categories.map((category) => {
    const categoryTitle = category.firstElementChild.textContent;
    const numberOfCategoryElements = category.lastElementChild.children.length;

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${numberOfCategoryElements}`);
  });
}

console.log(`Number of categories: ${categories.length}`);
makeCategoriesInfo(categories);

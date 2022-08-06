//import "./index.css";

//get button
const btn = document.querySelector("#searchBtn"); //get button element

//when button is clicked
btn.addEventListener("click", (e) => {
  e.preventDefault(); //stop page from reloading
  const articles = getAllArticleElements(); //get all articles and tutorials

  //log search input
  let userSearch = document.querySelector("#searchTerm");
  userSearch = searchTerm.value.toLowerCase();

  //if no blank input then filter articles, else show error message
  checkForBlankInput(userSearch)
    ? filterArticlesBySearch(articles, userSearch)
    : showErrorMessage(articles);
});

////////////////////////
//  Helper Functions  //
////////////////////////

function showErrorMessage(articleList) {
  const container = document.querySelector(".articles");

  articleList.forEach((a) => a.classList.add("hidden")); //hide all articles

  //add error text
  container.innerHTML += `<div class="error" id="searchError">Please enter a search term</div>`;
}

function checkForBlankInput(input) {
  return input.replace(/\s+/g, "") != "";
}

function filterArticlesBySearch(articleList, searchTerm) {
  articleList.forEach((a) =>
    a.innerText.toLowerCase().includes(searchTerm)
      ? a.classList.remove("hidden")
      : a.classList.add("hidden")
  );
}

function getAllArticleElements() {
  const articles = document.querySelectorAll(".article");
  const tutorials = document.querySelectorAll(".tutorial");
  return [...articles, ...tutorials];
}

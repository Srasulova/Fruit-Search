const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

// function search(str) {
//   let results = [];

//   // TODO
//   results.push(
//     fruit.filter((f) => f.toLowerCase().includes(str.toLowerCase()))
//   );
//   return results;
// }

// Look for array values that match the str
function search(str) {
  return fruit.filter((f) => f.toLowerCase().includes(str.toLowerCase()));
}

//
function searchHandler(e) {
  e.preventDefault();
  const inputVal = input.value.trim();
  const results = search(inputVal);

  if (inputVal !== "") {
    showSuggestions(results, inputVal);
    suggestions.classList.add("suggested");
  } else {
    suggestions.innerHTML = ""; // Clear suggestions if the input is empty
    suggestions.classList.remove("suggested");
  }
}

// For each value in the results array that match the user input,
// create a new li with the text of the result and append it to suggestions ul.
function showSuggestions(results, inputVal) {
  suggestions.innerHTML = "";
  results = search(inputVal);

  results.forEach((result) => {
    const suggestedFruit = document.createElement("li");
    suggestedFruit.textContent = result;
    suggestedFruit.classList.add("has-suggestions");
    suggestions.appendChild(suggestedFruit);
  });
}

// Once user clicks on one of the list items display it in the input field,
// and clear the suggestions ul
function useSuggestion(e) {
  if (e.target.classList.contains("has-suggestions")) {
    input.value = e.target.textContent;
    suggestions.innerHTML = "";
  }
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);

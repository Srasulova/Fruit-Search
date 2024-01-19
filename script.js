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

function search(str) {
  return fruit.filter((f) => f.toLowerCase().includes(str.toLowerCase()));
}

function searchHandler(e) {
  // TODO
  e.preventDefault();
  const inputVal = input.value.trim(); // Trim to handle whitespace
  const results = search(inputVal);

  if (inputVal !== "") {
    showSuggestions(results, inputVal);
    // suggestions.classList.add("suggested");
  } else {
    suggestions.innerHTML = "";
    suggestions.classList.remove("suggested"); // Clear suggestions if the input is empty
  }
}

function showSuggestions(results, inputVal) {
  // TODO
  suggestions.innerHTML = "";
  results = search(inputVal);

  results.forEach((result) => {
    const suggestedFruit = document.createElement("li");
    suggestedFruit.textContent = result;
    suggestedFruit.classList.add("has-suggestions");
    suggestions.classList.add("suggested");
    suggestions.appendChild(suggestedFruit);
  });
}

function useSuggestion(e) {
  // TODO
  if (e.target.classList.contains("has-suggestions")) {
    input.value = e.target.textContent;
    suggestions.innerHTML = "";
  }
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);

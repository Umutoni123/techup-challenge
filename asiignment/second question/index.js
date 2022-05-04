const fileUpload = document.querySelector(".cheaper");
fileUpload.addEventListener("click", () => {
  document.getElementById("file").click();
});

/*  This javascript is for the question two
where  i was filtering within the array and look for minimum and maximum prices of the products
as well as the total

*/
const item = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
];
let total = 0;

item.forEach((item) => {
  // Displaying all items
  const list = document.querySelector(".cheap");
  const prod = document.createElement("h3");
  prod.textContent = item.name + "  " + item.price + "$";
  list.appendChild(prod);
  total = total + item.price;
  return total;
});

// The Cheap item
const cheap = item.reduce((prev, curr) => {
  return prev.price < curr.price ? prev : curr;
});
const smallProd = document.querySelector(".cheap");
const smallText = document.createElement("h1");
const contentSmall = "Cheaper item :";
smallText.textContent = contentSmall + " " + cheap.name + " " + cheap.price;
smallProd.appendChild(smallText);
// The expensive item
const expensive = item.reduce((prev, curr) => {
  return curr.price > prev.price ? curr : prev;
});
const largeProd = document.querySelector(".expensive");
const text = document.createElement("h1");
const contentLarge = "The item with expensive price is :";
text.textContent = contentLarge + " " + expensive.name + " " + expensive.price;
largeProd.appendChild(text);

// total price of all items combined
const combined = document.querySelector(".total");
const combText = document.createElement("h1");
combText.textContent =
  "The Total price of all items combined together is : " + total;
combined.appendChild(combText);

// total price combined exxcluding price < 10
let maxCombined = 0;
const totalRemoved = item.filter((item) => item.price >= 10);
totalRemoved.forEach((item) => {
  maxCombined = maxCombined + item.price;
  return maxCombined;
});
const lastTotal = document.querySelector(".sum");
const lastText = document.createElement("h1");
lastText.textContent =
  "The total price of all items excluding those of price < 10 is: " +
  maxCombined;
lastTotal.appendChild(lastText);

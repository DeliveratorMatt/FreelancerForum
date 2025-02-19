/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// ===State===
function MakeFL() {
  const FLName = Math.floor(Math.random() * 5);
  const FLOcc = Math.floor(Math.random() * 5);
  const FLRate = Math.floor(Math.random() * 180) + 20;
  const singleFL = {
    name: NAMES[FLName],
    occupation: OCCUPATIONS[FLOcc],
    price: FLRate,
  };
  return singleFL;
}

let allLancers = Array.from({ length: NUM_FREELANCERS }, MakeFL);

let sum = 0;
for (const lancer of allLancers) {
  sum = sum + lancer.price;
}
const meanRate = sum / NUM_FREELANCERS;

// ===Components===
function OneFL(FLStats) {
  const { name, occupation, price } = FLStats;

  const $SingleFL = document.createElement("figure");
  $SingleFL.classList.add("single");
  $SingleFL.innerHTML = `
    <p>Name: ${name}</p>
    <p>Occupation: ${occupation}</p>
    <p>Price: ${price}</p>`;
  return $SingleFL;
}

function FLArray() {
  const $FLarray = document.createElement("article");
  $FLarray.classList.add("lancers");
  //Take the array of all lancers and map them into contents
  //one at a time using the OneFL function.
  const $contents = allLancers.map(OneFL);
  $FLarray.replaceChildren(...$contents);
  return $FLarray;
}

function AvgRate() {
  const $avgDisplay = document.createElement("section");
  $avgDisplay.replaceChildren(...meanRate);
  return $avgDisplay;
}

// ===Render===
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
  <h1>Freelancers</h1>
  <FLArray></FLArray>
  <AvgRate></AvgRate>
  `;
  $app.querySelector("FLArray").replaceWith(FLArray());
  $app.querySelector("AvgRate").replaceWith(AvgRate());
}
render();

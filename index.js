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
function FLStats() {
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

let allLancers = Array.from({ length: NUM_FREELANCERS }, FLStats);

let sum = 0;
for (const lancer of allLancers) {
  sum = sum + lancer.price;
}
const meanRate = sum / NUM_FREELANCERS;

// ===Components===
function OneFL(FLStats) {
  const { Name, Occupation, Price } = singleFL;

  const $singleFL = document.createElement("figure");
  $singleFL.classList.add("single");
  $singleFL.innerHTML = `
    <p>Name: ${Name}</p>
    <p>Occupation: ${Occupation}</p>
    <p>Price: ${Price}</p>`;
  return $singleFL;
}

function FLArray() {
  const $FLarray = document.createElement("article");
  $FLarray.classList.add("lancers");
  const $contents = freeLancers.map(OneFL);
  $FLarray.replaceChildren(...$contents);
  return $FLarray;
}

function avgRate() {
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
  <avgRate></avgRate>
  `;
  $app.querySelector("FLArray").replaceWith(FLArray());
  $app.querySelector("avgRate").replaceWith(avgRate());
}
render();

/*function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Inspirational Quotes</h1>
    <QuoteCards></QuoteCards>
  `;
  $app.querySelector("QuoteCards").replaceWith(QuoteCards(quotes));
}
render();*/

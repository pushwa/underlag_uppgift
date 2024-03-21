"use strict";

//
function roundtrip(num, ...c) {
  // Parent
  const main = document.querySelector("main");
  const parent = document.createElement("section");
  parent.classList.add("card", `card${num}`);
  main.appendChild(parent);

  // Child 1
  const child1 = document.createElement("article");

  // Make class if there is any strings
  if (Object.keys(c).length > 0) {
    child1.classList.add(...c);
  }

  parent.appendChild(child1);

  // Heading
  const headings = data.find((obj) => {
    return obj.id === 6572900;
  });

  const heading = document.createElement("h2");

  switch (num) {
    case 1:
      heading.innerText = headings.heading1;
      break;
    case 2:
      heading.innerText = headings.heading2;
      break;
    case 3:
      heading.innerText = headings.heading3;
      break;
  }

  child1.appendChild(heading);

  // Trip
  const tripArray = data
    .map(function (obj) {
      switch (num) {
        case 1:
          return obj.trip1;
        case 2:
          return obj.trip2;
        case 3:
          return obj.trip3;
      }
    })
    .filter(function (obj) {
      return obj !== undefined;
    });

  tripArray.forEach((arr) => {
    const city = document.createElement("p");
    city.innerText = arr;
    child1.appendChild(city);
  });

  // Price
  const child2 = document.createElement("aside");
  const prices = data.find((obj) => {
    return obj.id === 7683000;
  });

  const price = document.createElement("h3");
  switch (num) {
    case 1:
      price.innerText = `${prices.price1} ,-`;
      break;
    case 2:
      price.innerText = `${prices.price2} ,-`;
      break;
    case 3:
      price.innerText = `${prices.price3} ,-`;
      break;
  }

  child2.appendChild(price);
  parent.appendChild(child2);
}

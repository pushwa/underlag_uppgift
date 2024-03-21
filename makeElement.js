"use strict";

function makeElement(el, par, stringOrNumber, idName, ...clName) {
  const makeIt = () => {
    const parent = document.querySelector(par);
    const elem = document.createElement(el);

    // Check string for inner-text
    if (typeof stringOrNumber === "string") {
      elem.innerText = stringOrNumber;

      //Check number for inner-text
    } else if (typeof stringOrNumber === "number") {
      const HeadingObject = data.find((obj) => {
        return obj.id === 8794100;
      });

      const headings = [
        HeadingObject.mainHeading1,
        HeadingObject.mainHeading2,
        HeadingObject.mainHeading3,
      ];
      const numb = stringOrNumber - 1;
      elem.innerText = headings[numb];
    }

    // Check id
    if (typeof idName === "string") {
      elem.setAttribute("id", idName);
    }

    // Check class
    if (Object.keys(clName).length > 0) {
      elem.classList.add(...clName);
    }

    // Adding element to parent
    parent.appendChild(elem);
  };

  // Make by restriction
  const elems = ["h1", "h4", "h5", "h6", "p", "div"];
  for (let i = 0; i < elems.length; i++) {
    if (el === elems[i]) {
      makeIt();
      break;
    }
  }
}

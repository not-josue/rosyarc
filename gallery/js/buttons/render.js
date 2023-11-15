import { data } from "./data";

export const renderButtons = () => {
  // get div
  const divElement = document.getElementById("btnGroup");
  // create an array that contains a button element for each data object
  // return a template literal for each data object
  // the first 4 elements have icons, the rest just text content
  // join the array together
  const buttons = data
    .map((button, index) => {
      // icons with text content
      if (index <= 3) {
        return `
        <button class="button ${button.class} px-4" data-color="${
          button.color
        }">
          <span>
            <span class="icon">
                <i aria-hidden="true" class="fa-solid ${
                  button.icon
                } fa-lg" style="color: hsl(0, 0%, 100%);"></i>
            </span>
            <span>${
              button.color[0].toUpperCase() + button.color.slice(1)
            }</span>
          </span>
        </button>`;
      } else {
        // only text content
        return `
        <button class="button ${button.class}" data-color="${button.color}">
        ${button.color[0].toUpperCase() + button.color.slice(1)}
        </button>`;
      }
    })
    .join("");
  // add the innerHTML to the div
  divElement.innerHTML = buttons;
};

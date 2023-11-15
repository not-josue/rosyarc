export const filterGallery = () => {
  // get buttons
  const btnEls = document.querySelectorAll("#btnGroup button");
  // get images
  const divEls = Array.from(document.querySelectorAll("#images .column"));
  // iterate over buttons
  btnEls.forEach((button) => {
    // onclick event listener for buttons
    button.onclick = (e) => {
      // set clicked button's dataset to a variable
      const color = e.currentTarget.dataset.color;
      // set the filtered array to a variable
      const filteredArray = divEls.filter((image) => {
        // return if the image has a class that matches the data-set of the button
        return image.classList.contains(color);
      });
      // get div element that holds the gallery
      const divEl = document.getElementById("images");
      // clear innerHTML
      divEl.innerHTML = "";
      // iterate over the filtered array, and append into divEl
      filteredArray.forEach((image) => divEl.appendChild(image));
    };
  });
};

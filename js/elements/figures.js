export const figureStyles = () => {
  // get figure elements
  const figureEls = Array.from(document.getElementsByTagName("figure"));
  // iterate over figure elements
  figureEls.forEach((element) => {
    // class: image
    element.classList.add("image");
  });
};

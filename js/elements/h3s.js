export const h3Styles = () => {
  // get h3 elements
  const h3Els = Array.from(document.getElementsByTagName("h3"));
  // iterate over all h3 elements
  h3Els.forEach((element) => {
    // classes: title
    element.classList.add("title");
  });
};

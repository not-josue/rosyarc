export const h2Styles = () => {
  // get all h2 elements
  const h2Els = Array.from(document.getElementsByTagName("h2"));
  // iterate over all h2 elements
  h2Els.forEach((element) => {
    // classes: is-size-3, has-text-weight-bold, has-text-centered, mb-6
    element.classList.add(
      "is-size-2",
      "has-text-weight-bold",
      "has-text-centered",
      "mb-6"
    );
  });
};

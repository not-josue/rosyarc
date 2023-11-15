export const sectionStyles = () => {
  // get section elements
  const sectionEls = Array.from(document.body.getElementsByTagName("section"));
  sectionEls.forEach((section, index) => {
    // add classes to all except the first
    if (index > 0) section.classList.add("section", "is-medium");
  });
};

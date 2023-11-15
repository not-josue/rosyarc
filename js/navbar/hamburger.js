export const hamburger = () => {
  // get burger element
  const burgerEl = document.querySelector(".navbar-burger");
  burgerEl.onclick = () => {
    // set burger element's data target
    const target = burgerEl.dataset.target;
    // get element which matches burger's data target
    const divEl = document.getElementById(target);
    // toggle active classes on both
    divEl.classList.toggle("is-active");
    burgerEl.classList.toggle("is-active");
    // toggle aria-expanded
    const isExpanded = burgerEl.getAttribute("aria-expanded");
    burgerEl.setAttribute(
      "aria-expanded",
      isExpanded === "false" ? "true" : "false"
    );
  };
};

export const scrollTop = () => {
  // get button element
  const btnEl = document.getElementById("top");
  // set position where you want the button to appear
  const position = 800;
  // display function
  buttonDisplay(btnEl, position);
  // on click event handler
  btnEl.onclick = () => {
    document.body.scrollTop = 0; // safari
    document.documentElement.scrollTop = 0; // chrome, firefox, ie, and opera
  };
};

// display element when greater than a position
const buttonDisplay = (element, position) => {
  document.onscroll = () => {
    if (window.scrollY > position) element.classList.remove("is-hidden");
    else element.classList.add("is-hidden");
  };
};

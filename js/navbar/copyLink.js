export const copyLink = () => {
  // get button element
  const buttonEl = document.getElementById("copyLink");
  buttonEl.onclick = () => {
    // set current url
    const location = window.location.href;
    // copy current url
    navigator.clipboard
      .writeText(location)
      .then(() => {
        // get notification div
        const divEl = document.querySelector(".notification");
        // set top height of notification
        divEl.style.top = getNavHeight() + "px";
        // remove is-hidden class
        divEl.classList.remove("is-hidden");
        // add is-hidden class after 1 second
        setTimeout(() => {
          divEl.style.top = 0;
          divEl.classList.add("is-hidden");
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const getNavHeight = () => {
  // get navbar height
  const navEl = document.body.querySelector("nav");
  const navHeight = navEl.getBoundingClientRect().height;
  return navHeight;
};

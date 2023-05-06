document.addEventListener('DOMContentLoaded', () => {

    // burger dropdown form mobile and tablet
    const burger = document.querySelector('#burger');
    //console.log(burger);

    const navlinks = document.querySelector('#navlinks');
    //console.log(navlinks);

    burger.addEventListener('click', () => {
        navlinks.classList.toggle('is-active');
    });

    // go to Top

    const button = document.querySelector('#top');
    //console.log(button);

    window.onscroll = function () {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            button.style.display = "flex";
        } else {
            button.style.display = "none";
        }
    }

    button.addEventListener('click', function () {
        document.body.scrollTop = 0; // safari
        document.documentElement.scrollTop = 0; // chrome, firefox, ie, and opera
    });

});
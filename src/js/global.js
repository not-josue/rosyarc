// check if user has already previously acknowledged
if (sessionStorage.getItem('cookieAcknowledge')) {
    const card = document.querySelector('#cookieMsg');
    card.classList.add('is-hidden');
}

// burger for mobile and tablet
function burger() {
    const burger = document.querySelector('#burger');
    //console.log(burger);

    const navlinks = document.querySelector('#navlinks');
    //console.log(navlinks);

    burger.addEventListener('click', () => {
        navlinks.classList.toggle('is-active');
    });
}

// go to Top
function goTop() {
    const button = document.querySelector('#top');
    //console.log(button);

    window.onscroll = function () {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            button.classList.remove('is-hidden');
        } else {
            button.classList.add('is-hidden');
        }
    }

    button.addEventListener('click', function () {
        document.body.scrollTop = 0; // safari
        document.documentElement.scrollTop = 0; // chrome, firefox, ie, and opera
    });
}

document.addEventListener('DOMContentLoaded', () => {

    // burger dropdown form mobile and tablet
    burger();

    // go to Top
    goTop();


});

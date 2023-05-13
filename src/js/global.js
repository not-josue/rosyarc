// check if user has already previously acknowledged
if (sessionStorage.getItem('cookieAcknowledge')) {
    const card = document.querySelector('#cookieMsg');
    card.classList.add('is-hidden');
}

document.addEventListener('DOMContentLoaded', () => {

    // cookie acknowledgement
    remove();

    // burger dropdown form mobile and tablet
    burger();

    // go to Top
    goTop();


});

// close cookie popup and set acknowledgement to session storage
function remove() {
    const remove = document.querySelector('button.delete');
    remove.onclick = () => {
        const card = document.querySelector('#cookieMsg');
        card.classList.add('is-hidden');
        sessionStorage.setItem('cookieAcknowledge', true);
    }
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
            button.style.display = "flex";
        } else {
            button.style.display = "none";
        }
    }

    button.addEventListener('click', function () {
        document.body.scrollTop = 0; // safari
        document.documentElement.scrollTop = 0; // chrome, firefox, ie, and opera
    });
}
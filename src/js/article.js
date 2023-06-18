// check if user has already previously acknowledged
if (sessionStorage.getItem('cookieAcknowledge')) {
    const card = document.querySelector('#cookieMsg');
    card.classList.add('is-hidden');
}

// close cookie popup and set acknowledgement to session storage
function remove() {
    const popup = document.querySelector('button.delete');
    popup.onclick = () => {
        const card = document.querySelector('#cookieMsg');
        card.classList.add('is-hidden');
        sessionStorage.setItem('cookieAcknowledge', true);
    }
}

document.addEventListener('DOMContentLoaded', () => {

    // cookie acknowledgement
    remove();

});
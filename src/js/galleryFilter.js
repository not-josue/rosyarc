document.addEventListener('DOMContentLoaded', () => {
    textColor();
    filterGallery();
});

// text color for filter buttons
function textColor() {
    const filter = document.querySelectorAll('.column button');
    filter.forEach((button) => {
        if (button.innerText !== 'All'
            && button.innerText !== 'Crosses'
            && button.innerText !== 'Hearts'
            && button.innerText !== 'Saddles'
            && button.innerText !== 'White'
            && button.innerText !== 'Yellow'
            && button.innerText !== 'Peach') {
            button.classList.add('has-text-light');
        }
    });
}

function filterGallery() {
    const filter = document.querySelectorAll('.column button');
    const img = document.querySelectorAll('div.is-4');

    filter.forEach((button) => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-color');

            button.classList.add('is-active-secondary');

            img.forEach((img) => {
                if (value === 'all') {
                    img.classList.remove('is-hidden');
                } else if (img.classList.contains(value)) {
                    img.classList.remove('is-hidden');
                } else {
                    img.classList.add('is-hidden');
                }
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {

    const measurementList = document.querySelectorAll('#measurement-list li');
    const measurementDetails = document.querySelectorAll('#measurement-details div');
    const measurementImg = document.querySelectorAll('#measurement-img div.card');

    measurementList.forEach((i) => {
        i.onclick = () => {
            // remove is-active class from all
            measurementList.forEach((i) => {
                i.classList.remove('is-active');
            });
            // add is-active class to clicked element
            i.classList.add('is-active');
            // match data target of clicked element to id
            const target = i.dataset.target;
            measurementDetails.forEach((detail) => {
                if (detail.getAttribute('id') === target) {
                    detail.classList.remove('is-hidden');
                } else {
                    detail.classList.add('is-hidden');
                }
            });
            // match button data target with img data target
            measurementImg.forEach((img) => {
                if (img.getAttribute('data-target') === target) {
                    img.classList.remove('is-hidden');
                } else {
                    img.classList.add('is-hidden');
                }
            });
        }
    });

})
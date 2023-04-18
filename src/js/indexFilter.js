document.addEventListener('DOMContentLoaded', () => {
    // filter for tabs on index.html
    // tabs
    const tabs = document.querySelectorAll('.tabs li');
    console.log(tabs);

    // tab content
    const tabContent = document.querySelectorAll('#tab-content div');
    console.log(tabContent);
    
    // images
    const tabImg = document.querySelectorAll('#cards .card');
    console.log(tabImg);

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            // remove active class
            tabs.forEach(item => item.classList.remove('is-active'));
            // add active class
            tab.classList.add('is-active');
            // match data target of tab clicked with id of tabContent and data target of tabImg
            const target = tab.dataset.target;
            // console.log(target);
            // show tabbed content
            tabContent.forEach(div => {
                if(div.getAttribute('id') === target) {
                    div.classList.remove('is-hidden');
                } else {
                    div.classList.add('is-hidden');
                }
            }); 
            // show tabbed image
            tabImg.forEach(img => {
                if(img.getAttribute('data-target') === target) {
                    img.classList.remove('is-hidden');
                } else {
                    img.classList.add('is-hidden');
                }
            });
        });
    });
});
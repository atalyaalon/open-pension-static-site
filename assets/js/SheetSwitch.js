'use strict';

const links = document.querySelectorAll('.nav-tabs .link a');

Object.values(links).map(link => {
    link.addEventListener("click", (element) => {
        document.querySelector('.nav-tabs li.selected').classList.remove('selected');
        element.target.parentElement.classList.add('selected');
    })
});

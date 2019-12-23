'use strict';

const elements = document.querySelectorAll('.nav-tabs .link a');

Object.values(elements).map(item => {
    item.addEventListener("click", (element) => {
        document.querySelector('.nav-tabs li.selected').classList.remove('selected');
        element.target.parentElement.classList.add('selected');
    })
});

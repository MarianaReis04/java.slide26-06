'use strict';

const images = [
    { 'id': '1', 'url':'./img/lago.jpg' },
    { 'id': '2', 'url':'./img/eve.jpg' },
    { 'id': '3', 'url':'./img/mar.jpg' },
    { 'id': '4', 'url':'./img/neve.jpg' },
    { 'id': '5', 'url':'./img/sakura.jpg' },
    { 'id': '6', 'url':'./img/vermelha.jpeg'},
    { 'id': '7', 'url':'./img/cachoeira.jpg'},
    { 'id': '8', 'url':'./img/rosa.jpg'},
    { 'id': '9', 'url':'./img/aurea.jpg!d'},
    { 'id': '10', 'url':'./img/praia.jpg'},
   
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);
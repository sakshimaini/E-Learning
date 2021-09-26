burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
navRight=document.querySelector('.right-nav');
navList=document.querySelector('.nav-list');

burger.addEventListener('click',()=> {
    navRight.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');


});
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.navbar');
let bod = document.querySelector('.container');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');
  bod.classList.toggle('wid')
});


// var typed = new Typed("#main-heading", {
//   strings: [
//     "Front-end Developer.",
//     "React Developer.",
//     "JavaScript Developer.",
//   ],
//   typeSpeed: 60,
//   backSpeed: 60,
//   loop: true,
// });
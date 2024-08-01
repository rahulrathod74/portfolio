let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.navbar');
let bod = document.querySelector('.container');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');
  bod.classList.toggle('wid')
});

document.getElementById('resume-link').addEventListener('click', function(event) {
  event.preventDefault();
  const url = this.href;
  
  // Open in new tab
  window.open(url, '_blank');
  
  // Trigger download
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Rahul_Rathod_Resume.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
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
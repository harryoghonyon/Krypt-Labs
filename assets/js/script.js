// const heroImg = document.querySelector('.heroImg');

// function rotate() {
//   heroImg.style.transform = 'rotate(0deg)';
//   heroImg.animate([
//     { transform: 'rotate(0deg)' },
//     { transform: 'rotate(360deg)' }
//   ], {
//     duration: 20000,
//     iterations: Infinity,
//     easing: 'linear'
//   });
// }

// rotate();

const hamburgerWrap = document.querySelector('.hamburgerWrap');
const hamburgerMenuSection = document.querySelector('.hamburgerMenuSection');

hamburgerWrap.addEventListener('click', function() {
  hamburgerMenuSection.classList.toggle('active');
  document.body.classList.toggle("hide-scroll")
});

document.addEventListener('click', function(event) {
  if (!event.target.closest('.hamburgerMenuSection') && !event.target.closest('.hamburgerWrap')) {
    hamburgerMenuSection.classList.remove('active');
  }
});

const hamburgerStroke1 = document.querySelector('#hamburgerStroke1');
const hamburgerStroke2 = document.querySelector('#hamburgerStroke2');

hamburgerWrap.addEventListener('click', () => {
    hamburgerStroke1.classList.toggle('rotate1');
    hamburgerStroke2.classList.toggle('rotate2');
});

document.addEventListener('click', (event) => {
    if (!hamburgerWrap.contains(event.target)) {
      hamburgerStroke1.classList.remove('rotate1');
      hamburgerStroke2.classList.remove('rotate2');
    }
});

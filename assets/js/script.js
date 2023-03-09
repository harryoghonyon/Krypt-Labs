// Hamburger menu code
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

// End

// Footer Opener code

const footerLinkBlock = document.querySelectorAll(".footerLinkBlock");

console.log("footerLinkBlock ", footerLinkBlock)

footerLinkBlock.forEach((element, i) => {
  console.log({ [i]: element})
  element.addEventListener("click", e => element.classList.toggle("toggled"))
})

// End

// Preloader code

window.addEventListener("DOMContentLoaded", function () {
  const preloader = document.querySelector(".preloader");
  setTimeout(function () {
    preloader.classList.add("fade-out");  
  }, 5000);
});

// End

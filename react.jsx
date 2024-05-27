/* sticky navbar */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

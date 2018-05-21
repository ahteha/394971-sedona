
var mainNav = document.querySelector('.main-nav');
var openNav = document.querySelector('.page-header__burger');
var closeNav = document.querySelector('.page-header__cross');

mainNav.classList.add('main-nav--closed');
openNav.classList.remove('page-header__burger--hide');

openNav.addEventListener('click', function() {
  mainNav.classList.remove('main-nav--closed');
  openNav.classList.add('page-header__burger--hide');
  closeNav.classList.remove('page-header__cross--hide');
});


closeNav.addEventListener('click', function() {
  mainNav.classList.add('main-nav--closed');
  closeNav.classList.add('page-header__cross--hide');
  openNav.classList.remove('page-header__burger--hide');
});

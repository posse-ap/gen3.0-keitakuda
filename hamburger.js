const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function () {
  console.log('okay');
  ham.classList.toggle('active');
  nav.classList.toggle('active');

});

// const hamburger = document.getElementById('js-hamburger');
// const ham = document.getElementById('js-nav');

// hamburger.addEventListener('click', function(){
//   hamburger.classList.add('choice-none');
//   ham.classList.add('block');
// }
// );
'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// selecting elements

// console.log(document.documentElement) // this will select entire html
// console.log(document.head) // this will select entire head
// console.log(document.body) // this will select entire body

// console.log(document.querySelector('.header')) // this will return first element that using this class
// console.log(document.querySelectorAll('.section')) // this will return all the elements that are using this class
// console.log(document.querySelector('#section--1')) // this will return first element that using this id
// console.log(document.getElementById('section--1')) // this will return first element that using this id
// console.log(document.querySelectorAll('#section--1')) //  // this will return all the elements that are using this id

// console.log(document.getElementsByTagName('button')) // this will return all html collection whereever button is used
// console.log(document.getElementsByClassName('btn')) // method returns a html collection collection of elements with a specified class name(s) 'btn'

// // ------ creating and inserting elements ------ //
// const header = document.querySelector('.header')

// const message = document.createElement('div'); // this will create a new div element
// message.classList.add('cookie-message') // this will add a class to the above div created

// // message.textContent = 'we use cookies for improved functionality and analytics.' // this will add only text inside the div

// message.innerHTML = 'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>'; // this will add both text and html elements inside div

// // header.prepend(message) // this will put as a first child of header
// header.append(message) // this will put as a last child of header

// // either one is applied in prepend and append. DOM element is unique, so that it can live only at one place

// // inorder to get both we need to perform the following operation on it

// // header.append(message.cloneNode(true));

// // header.before(message); // this will put just before the header element
// // header.after(message) // this will put just after the header element

// // either one is applied in before and after


// // ------ Delete elements ------ //
// // on clicking button, remove message element
// document.querySelector('.btn--close-cookie').addEventListener('click', function () {
//   message.remove()
// })

// // styles
// message.style.backgroundColor = "#37383d"; // this will apply backgroud style to the message element and also these styles are set as inline styles

// message.style.width = '120%';

// // the below commands we can able to know styles applied on this element
// console.log(getComputedStyle(message).width)
// console.log(getComputedStyle(message).color)
// console.log(getComputedStyle(message).backgroundColor)
// console.log(getComputedStyle(message).height)

// // in styles.css in root, change color-primary to orangered
// document.documentElement.style.setProperty('--color-primary', 'orangered')

// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt) // Bankist logo
// console.log(logo.src) // http://127.0.0.1:5500/12-Advance-DOM-Banklist/img/logo.png
// console.log(logo.getAttribute('src')); // img/logo.png
// console.log(logo.className) // nav__logo

// logo.alt = 'Beautiful minimalist logo';

// // Non-standard
// console.log(logo.designer); // undefined
// console.log(logo.getAttribute('designer')); // null
// logo.setAttribute('company', 'Bankist');

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href); // http://127.0.0.1:5500/12-Advance-DOM-Banklist/index.html#
// console.log(link.getAttribute('href')); // #

// // Data attributes
// console.log(logo.dataset.versionNumber); // 3.0

// // Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c'); // not includes





// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert("heading")
//   // h1.removeEventListener('mouseenter', alertH1) // we are writing this only once on mouse enter this function should run
// }

// h1.addEventListener('mouseenter', alertH1)

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1)
// }, 3000) // after 3 sec the function wont run

///////////////////////////////////////
// Event Propagation in Practice
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);

//   // Stop propagation
//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });

//------ Smooth scorlling ------//
const buttonScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

buttonScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  console.log("check", s1coords)
  console.log(e.target.getBoundingClientRect())
  console.log('current scroll', window.pageXOffset, pageYOffset) // this shows how much we scrolled
  console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth) // this shows px of how much visible screen

  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth"
  // })
  section1.scrollIntoView({ behavior: "smooth" })
})

// Page navigation

document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});


///////////////////////////////////////
// DOM Traversing
import Swiper from "./swiper.min.js";
// Hamburger button (Mobile)
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.header-container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger--active');
  menu.classList.toggle('header-container--active')
});

// Dropdown List (Mobile)
let windowWidth = window.innerWidth; //Window size

if (windowWidth < 997) {
  const dropList = document.querySelector('.nav__list'),
        btnList = document.querySelector('.nav__notice');
  // Create an element li
  let newLi = document.createElement('li');
  newLi.classList.add('nav__item', 'nav__item--margin')
  newLi.innerHTML = '<a href="javascript:void(0);" class="nav__link main-link">Уведомления</a>';
  // Push an element li in .nav__list
  dropList.appendChild(newLi);

  btnList.addEventListener('click', () => {
    dropList.classList.toggle('nav__list--active');
    btnList.classList.toggle('nav__notice--active');
  });

  const links = document.querySelectorAll('.nav__link');

  for (let link of links) {
    link.onclick = () => {
      btnList.textContent = link.text;
      dropList.classList.remove('nav__list--active')
      btnList.classList.remove('nav__notice--active');
    }
  }
}

// Click on message in main content
const mes = document.querySelectorAll('.message'),
  icon = document.querySelectorAll('.message__icon'),
  mesText = document.querySelectorAll('.message__text');

for (let i = 0; i < mes.length; i++) {
  mes[i].addEventListener('click', () => {
    mesText[i].classList.toggle('message__text--open');
    icon[i].classList.toggle('message__icon--open')
  })
}

// В задании не запрещали пользоваться JS-плагинами, поэтому для экономии времени использовал готовое решение =)
var mySwiper = new Swiper('.news__slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  spaceBetween: 30,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    575: {
      slidesPerView: 1,
      centeredSlides: true,
      pagination: {
        el: '.news__pagination',
        clickable: true
      },
    }
  },
})

// Accordion in footer
if (windowWidth < 768) {
  const navTitle = document.querySelectorAll('.navigation__title'),
    navSubTitle = document.querySelectorAll('.navigation__subtitle-block');

  for (let i = 0; i < navTitle.length; i++) {
    navTitle[i].addEventListener('click', () => {
      let navSubTitleOpen = document.querySelector('.navigation__subtitle-block--open');
      let navTitleOpen = document.querySelector('.navigation__title--open');
      if (navSubTitleOpen) {
        navSubTitleOpen.classList.remove('navigation__subtitle-block--open');
        navTitleOpen.classList.remove('navigation__title--open');
      }
      navTitle[i].classList.toggle('navigation__title--open');
      navSubTitle[i].classList.toggle('navigation__subtitle-block--open');
    })
  }
}

// Lazy load
function lazyLoadImg(tag, attr) {
  [].forEach.call(document.querySelectorAll(`${tag}[data-src]`), function (img) {
    img.setAttribute(attr, img.getAttribute('data-src'));
    img.onload = function () {
      img.removeAttribute('data-src');
    };
  });
}
lazyLoadImg('img', 'src');
lazyLoadImg('source', 'srcset');
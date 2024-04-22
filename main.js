'use strict';

{
  // title
  window.onload = function () {
    document.querySelector('header .img').classList.add('img-show');
  };
  // menu
  const open = document.getElementById('open');
  var link = document.getElementsByClassName("link");
var triggers = Array.from(link);
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close')

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });
  triggers.forEach(function(link) {
  link.addEventListener('click', function() {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
});
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

// summary

  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.querySelector('ul');
  const sumP = document.querySelector('#link-summary .textcontent');
  const empty = document.querySelector('#link-summary .empty');
  const slides = ul.children;
  let currentIndex = 0;

  function updateButtons() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if (currentIndex === 0) {
      prev.classList.add('hidden');
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
    switch(currentIndex) {
      case 0 :
      sumP.textContent = '敵の強化';
      empty.classList.add('addempty');
      break;
      case 1 :
      sumP.textContent = '豊富な難易度上昇要素';
      empty.classList.remove('addempty');
      break;
      case 2 :
      sumP.textContent = '数十の追加アイテム';
      empty.classList.add('addempty');
      break;
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  updateButtons();

  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    moveSlides();
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    moveSlides();
  });

  // detail
  const dts = document.querySelectorAll('dt');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear');
    });
  });
}

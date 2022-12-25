var $ = document;

$.addEventListener('DOMContentLoaded', function () {
  // Slider
  const sliderMe = () => {
    let currentPosition = 0,
      sliderItem = document.querySelectorAll('.slider-item'),
      sliderItemWidth = window
        .getComputedStyle(sliderItem[0])
        .flexBasis.match(/\d+\.?\d+/g),
      sliderInner = $.querySelector('.slider-inner'),
      control = {
        next: $.querySelector('#next'),
        slideNext() {
          currentPosition += parseFloat(sliderItemWidth);
          if (currentPosition > limitPosition) {
            currentPosition = 0;
          }
          sliderInner.style.right = currentPosition + '%';
        },
        prev: $.querySelector('#prev'),
        slidePrev() {
          currentPosition -= parseFloat(sliderItemWidth);
          if (currentPosition < 0) {
            currentPosition = limitPosition;
          }
          sliderInner.style.right = currentPosition + '%';
        },
      },
      limitPosition =
        sliderItemWidth *
        (sliderItem.length - Math.floor(100 / sliderItemWidth));

    control.next.addEventListener('click', control.slideNext);
    control.prev.addEventListener('click', control.slidePrev);

    window.addEventListener('resize', function () {
      currentPosition = 0;
      $.querySelector('.slider-inner').style.right = currentPosition + '%';
    });
  };
  sliderMe();

  window.addEventListener('resize', sliderMe);
});


// GoTo-Top
const btnGoTop = $.querySelector('.goto-top');

$.onscroll = function () {
  if ($.body.scrollTop > 100 || $.documentElement.scrollTop > 100) {
    btnGoTop.classList.remove('goto-top--hide');
  } else {
    btnGoTop.classList.add('goto-top--hide');
  }
};

const nav = $.querySelector('nav');
const navbar = $.querySelector('.navbar');

window.addEventListener('scroll', () => {
  nav.style.boxShadow =
    $.documentElement.scrollTop > 0 && window.innerWidth > 960
      ? '0 .5rem 1rem rgba(0,0,0, .15)'
      : null;
});

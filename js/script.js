let offset = 0; // смещение от левого края

const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function () {
  offset = offset + 100;
  if (offset > 100) {
    offset = 0;
  }
  sliderLine.style.left = -offset + '%';
});

document.querySelector('.slider-back').addEventListener('click', function () {
  offset = offset - 100;
  if (offset < 0) {
    offset = 100;
  }
  sliderLine.style.left = -offset + '%';
});

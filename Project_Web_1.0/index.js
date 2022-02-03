// ===================================== slider mobile ======================================

let sliders = document.querySelectorAll(".section-slider__mobile-flex");

for (let i = 0; i < sliders.length; i++) {
  initSlider(sliders[i]);
}

function initSlider(item) {
  let items = item.querySelectorAll(".section-slider__mobile-item");
  const prev = item.querySelector(".section-slider__btn-left");
  const next = item.querySelector(".section-slider__btn-right");
  let index = 0;

  next.addEventListener("click", function () {
    items[index].classList.remove("active");

    if (index == items.length - 1) {
      index = 0;
    } else {
      index++;
    }

    items[index].classList.add("active");
  });

  prev.addEventListener("click", function () {
    items[index].classList.remove("active");

    if (index == 0) {
      index = items.length - 1;
    } else {
      index--;
    }

    items[index].classList.add("active");
  });
}

//========================================== popup login ===================

// let popup = document.querySelector('.popup');
// let popupContent = document.querySelector('.popup-content');
// let openButtons = document.querySelectorAll('.open-popup');
// let popupClose = document.querySelector('.popup-close');

// openButtons.forEach((butto) => {
//   butto.addEventListener('click', (e) => {
//     e.preventDefault();
//     popup.classList.add('active');
//     popupContent.classList.add('active');
//   });
// });

// popupClose.addEventListener('click', () => {
//   popup.classList.remove('active');
//   popupContent.classList.remove('active');
// } );

// document.addEventListener('click', (e) => {
//   if(e.target === popup) {
//     popup.classList.remove('active');
//     popupContent.classList.remove('active');
//   }
// });





// let popup = document.querySelector('.popup');



let openButtons = document.querySelectorAll('.open-popup');
let popupContent = document.querySelector('.popup-content');

let popupClose = document.querySelectorAll('.popup-close');


openButtons.forEach(function(item) {
  item.addEventListener('click', () => {
    let popupLoginName = item.getAttribute('data-popup');
    let popupContentName = item.getAttribute('data-popup-con');
    document.getElementById(popupLoginName).classList.add('active');
    document.getElementById(popupContentName).classList.add('active');
  })
})

popupClose.forEach(function(item) {
  item.addEventListener('click', () => {
    let popupClose = item.closest('.popup');
    let popupCloseContent = item.closest('.popup-content');
    popupClose.classList.remove('active');
    popupCloseContent.classList.remove('active');
  })
})


document.addEventListener('click', (e) => {
  if(e.target.classList.contains('popup')) {
    e.target.classList.remove('active');
    function
    // не закрывается active на popup-Content
  } 
});
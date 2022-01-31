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

// ===================================== slider mobile ======================================

let sliders = document.querySelectorAll(".section-slider__mobile-flex");

for (let i = 0; i < sliders.length; i++) {
  // определяем индекс слайдера
  initSlider(sliders[i]);
}

function initSlider(item) {
  //находим все элементы слайдера
  let items = item.querySelectorAll(".section-slider__mobile-item");
  //находим кнопку назад слайдера
  const prev = item.querySelector(".section-slider__btn-left");
  //находим кнопку вперед слайдера
  const next = item.querySelector(".section-slider__btn-right");
  //индекс элемента слайдера
  let index = 0;

  next.addEventListener("click", function () {
    //у активного элемента слайдера удаляем класс active
    items[index].classList.remove("active");

    if (index == items.length - 1) {
      //если слайд последний
      index = 0; //переходим на первый слайд
    } else {
      index++; // переходим на следующий слайд
    }
    //у активного элемента слайдера (теперь уже у следующего) добавляем класс active
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

//========================================== popup =====================================

let openButtons = document.querySelectorAll(".open-popup");
let popupContent = document.querySelector(".popup-content");
let popupClose = document.querySelectorAll(".popup-close");

openButtons.forEach(function (item) {
  //выполняет функцию (открытия) один раз для каждого элемента в массиве
  item.addEventListener("click", () => {
    let popupLoginName = item.getAttribute("data-popup"); //получение атрибута для элемента
    let popupContentName = item.getAttribute("data-popup-con"); //получение атрибута для элемента
    document.getElementById(popupLoginName).classList.add("active"); //поиск окна (id=атрибут) и добавление класса active
    document.getElementById(popupContentName).classList.add("active"); //поиск окна (id=атрибут) и добавление класса active
  });
});

popupClose.forEach(function (item) {
  //выполняет функцию (закрытия на крестик) один раз для каждого элемента в массиве
  item.addEventListener("click", () => {
    let popupClose = item.closest(".popup"); //возвращает ближайший родительский элемент с указанным классом
    let popupCloseContent = item.closest(".popup-content"); //возвращает ближайший родительский элемент с указанным классом
    popupClose.classList.remove("active"); //удаляет класс active
    popupCloseContent.classList.remove("active"); //удаляет класс active
  });
});

document.addEventListener("click", (e) => {
  //закрывает если click вне окна
  if (e.target.classList.contains("popup")) {
    e.target.classList.remove("active");
  }
});

// ==================================== back to top ======================

window.addEventListener("scroll", function () {
  let scroll = document.querySelector(".back-to-top");
  scroll.classList.toggle("active", window.scrollY > 400); // при скроле 400 появляется кнопка вверх
});

document.querySelector(".back-to-top").addEventListener("click", () => {
  window.scrollTo({ top: 0 }); //возвращаемся к началу
});

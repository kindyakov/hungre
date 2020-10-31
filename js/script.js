const menuLink = document.querySelectorAll(".menu-link");
const tabsBlock = document.querySelectorAll(".tabs-block");
// menuLink.addEventListener("click", function (event) {
//   event.preventDefault(); // Отменяет стандартное поведение ссылки
// });
// forEach цикол разделяет все кнопки
// item являеться отдельной кнопкой
menuLink.forEach(function (event) {
  event.addEventListener("click", function () {
    let currentBtn = event;
    let tabId = currentBtn.getAttribute("data-tab"); // Получаю атрибут кнопки с помощью метода 'getAttribute'
    let currentTab = document.querySelector(tabId);

    menuLink.forEach(function (event) {
      event.classList.remove("tabs-active");
    });
    tabsBlock.forEach(function (event) {
      event.classList.remove("tabs-active");
    });
    currentBtn.classList.add("tabs-active");
    currentTab.classList.add("tabs-active");
  });
});
document.querySelector(".tabs-active").click();

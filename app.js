//////////////////////////////////////tabbed component/////////////////////////////////////////

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
const submitBtn = document.querySelector(".contact__btn");
const test1 = document.querySelector("#test1");
const test2 = document.querySelector("#test2");
const test3 = document.querySelector("#test3");
const service = document.querySelector(".service__container");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);

  //guard clause
  if (!clicked) return;
  //active tab
  tabs.forEach((tab) => tab.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");
  //remove active
  tabsContent.forEach((content) =>
    content.classList.remove("operations__content--active")
  );

  //activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  service.classList.add("popup");
  console.log("clicked");

  console.log(`${test1.value}`);
});

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
const submitBtn = document.querySelector(".contact__btn");
const fullname = document.querySelector("#fullname");
const mail = document.querySelector("#mail");
const msg = document.querySelector("#msg");
const service = document.querySelector(".service__container");
const popup = document.querySelector(".popup");
const contact = document.querySelector(".contact");
const submit = document.querySelector("#submit");
const subscribeInput = document.querySelector("#subscribe");

//////////////////////////////////////tabbed component/////////////////////////////////////////
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

//////////////////////////////////////SUCCESS & FAIL MESSAGE POPUP/////////////////////////////////////////
const closePopup = function () {
  popup.classList.add("hidden");
};

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    fullname.value === "" ||
    fullname.value === null ||
    mail.value === "" ||
    mail.value === null ||
    msg.value === "" ||
    msg.value === null
  ) {
    const errorMessage = document.createElement("div");
    errorMessage.innerHTML = "Please fill in all inputs!";
    contact.appendChild(errorMessage);
    errorMessage.style.backgroundColor = "red";
    errorMessage.style.position = "fixed";
    errorMessage.style.top = "50%";
    errorMessage.style.left = "40%";

    const closeErrorMessage = function () {
      errorMessage.classList.add("hidden");
    };

    setTimeout(closeErrorMessage, 2000);
  } else {
    popup.classList.remove("hidden");
    console.log("clicked");
    setTimeout(closePopup, 2000);

    console.log(`${msg.value}`);

    //clearing input fields
    fullname.value = "";
    mail.value = "";
    msg.value = "";
  }
});

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (subscribeInput.value === "" || subscribeInput.value === "null") {
    console.log("nothing inputed");
  } else {
    console.log("input complete");
  }
});

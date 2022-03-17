const hamburger = document.querySelector(".hamburger");
const mobile_menu = document.querySelector("#header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(".nav-list ul li a");
const header = document.querySelector("#header .container");

console.log(hamburger)
console.log(mobile_menu)
console.log(menu_item)
console.log(header)

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

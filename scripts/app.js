let content = document.querySelector(".container");
let loader = document.querySelector(".loader3");

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    content.style.display = "flex";
    setTimeout(() => {
      content.style.opacity = 1;
    }, 50);
  }, 2500);
}

init();

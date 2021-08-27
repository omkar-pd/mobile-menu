const color = document.querySelectorAll(".color");
const plus = document.querySelectorAll(".plus");
const dropdown = document.querySelectorAll(".dropdown");

color.forEach((item, index) => {
  item.addEventListener("click", function () {
    document.documentElement.setAttribute("data-theme", index + 1);
  });
});

plus.forEach((item, index) => {
  item.addEventListener("click", function () {
    dropdown[index].classList.toggle("show");
    if (dropdown[index].classList.contains("show")) {
      item.style.transform = "rotate(45deg)";
    } else {
      item.style.transform = "rotate(90deg)";
    }
  });
});

const containers = document.querySelectorAll(".container");

containers.forEach((element) => {
  element.lastElementChild.style.display = "none";
});

containers.forEach((elem) => {
  elem.firstElementChild.addEventListener("click", () => {
    elem.lastElementChild.style.display =
      elem.lastElementChild.style.display === "none" ? "block" : "none";
  });
});

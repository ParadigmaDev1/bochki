const selectors = document.querySelectorAll(".selector");

if (selectors.length > 0) {
  selectors.forEach((selector) => {
    const selectorTitle = selector.querySelector(".selector__title");
    selectorTitle.addEventListener("click", () => {
      if (selector.className.includes("active")) {
        selector.classList.remove("active");
      } else {
        selector.classList.add("active");
      }
    });
    selector.addEventListener("mouseleave", () => {
      selector.classList.remove("active");
    });
  });
}

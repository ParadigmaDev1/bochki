const header = document.querySelector(".header");

const handleHeaderActive = () => {
  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};
handleHeaderActive();
window.addEventListener("scroll", () => {
  handleHeaderActive();
});

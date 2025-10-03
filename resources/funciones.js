document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");
  const layout = document.querySelector(".layout");

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("collapsed");
    layout.classList.toggle("collapsed");
  });
});

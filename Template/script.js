const switchEl = document.querySelector(".switch");
const toggle = document.getElementById("toggle");
//const navSide = document.querySelector(".nav-side");

switchEl.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

toggle.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);

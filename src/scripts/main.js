// change background banner
const bg = document.getElementById("banner");
const links = document.querySelectorAll(".header__link");

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    let background = link.getAttribute("data-bg");
    bg.style.background = `url(${background})no-repeat center /cover`;
  });
});

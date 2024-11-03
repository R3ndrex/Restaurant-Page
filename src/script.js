import "./style.css";
import CreatePage from "./utils/createPage.js";
import MainPage from "./utils/main-page.js";

const buttonMenu = document.querySelector(".menu");
const buttonAbout = document.querySelector(".about");
const buttonHome = document.querySelector(".home");

const content = document.querySelector("#content");
const page = new CreatePage(content);
const main = new MainPage(page);
main.init();

[buttonAbout, buttonMenu, buttonHome].forEach((element) => {
    element.addEventListener("click", () => {
        page.clearPage();
    });
});

buttonHome.addEventListener("click", () => {
    const main = new MainPage(page);
    main.init();
});

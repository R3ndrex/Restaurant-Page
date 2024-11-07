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

buttonAbout.addEventListener("click", () => {
    page.clearPage();
    import("./utils/menu-page.js").then(({ default: AboutPage }) => {
        const menu = new AboutPage(page);
        menu.init();
    });
    buttonHome.disabled = false;
    buttonMenu.disabled = false;
    buttonAbout.disabled = true;
});

buttonHome.addEventListener("click", () => {
    page.clearPage();
    const main = new MainPage(page);
    main.init();
    buttonHome.disabled = true;
    buttonMenu.disabled = false;
    buttonAbout.disabled = false;
});

buttonMenu.addEventListener("click", () => {
    page.clearPage();
    import("./utils/menu-page.js").then(({ default: MenuPage }) => {
        const menu = new MenuPage(page);
        menu.init();
    });
    buttonHome.disabled = false;
    buttonMenu.disabled = true;
    buttonAbout.disabled = false;
});

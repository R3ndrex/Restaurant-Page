import pizzeriaInside from "../images/pizzeria-inside.jpg";
import germanyImg from "../images/germany.png";
import turkeyImg from "../images/turkey.png";
import romaniaImg from "../images/romania.png";

import facebookLogo from "../images/facebook.svg";
import gmailLogo from "../images/gmail.svg";
import phoneLogo from "../images/phone.svg";
import instagramLogo from "../images/instagram.svg";

const imagesText = {
    0: "Heidestraße 24, Germany",
    1: "Bünyan Akkışla Yolu No:101, Turkey",
    2: "Strada Zorilor 12, Romania",
};
const imagesPath = {
    0: germanyImg,
    1: turkeyImg,
    2: romaniaImg,
};

const HeaderText = {
    0: "About Us",
    1: "Location",
    2: "Socials",
};

const socials = {
    0: [`PizzeriaFacebook`, facebookLogo],
    1: [`PizzeriaInst`, instagramLogo],
    2: [`randommail.gmail.com`, gmailLogo],
    3: [`660 739 312 344`, phoneLogo],
};

class CreateAboutPage {
    constructor(createPageObject) {
        this.main = createPageObject;
        const article = (this.article = this.main.createElement("article"));
        article.classList.add("about");
    }
    createSections() {
        for (let i = 0; i < 3; i++) {
            const section = this.main.createElement("section", this.article);
            this.main.createElement("h2", section, HeaderText[i]);
            if (i === 0) {
                this.main.createElement(
                    "p",
                    section,
                    `At Our Pizzeria, we’re not just about pizza – we’re about bringing people together, sharing flavors, and creating unforgettable moments. Every pizza we make is crafted with fresh, hand-picked ingredients, using traditional recipes passed down through generations. From our crispy thin crust to our homemade sauces and locally sourced toppings, we believe every slice should be a masterpiece.`
                );
                this.main.createImage(
                    pizzeriaInside,
                    section,
                    "pizzeriaInside"
                );
            }
            if (i === 1) {
                section.classList.add("location");
            }
            if (i === 2) {
                const ul = this.main.createElement("ul", section);
                for (let i = 0; i < 4; i++) {
                    const li = this.main.createElement("li", ul);
                    const image = this.main.createImage(socials[i][1], li);
                    image.classList.add("icon");
                    const text = document.createTextNode(socials[i][0]);
                    li.appendChild(text);
                }
            }
        }
    }

    createSlider(text, images, parent, i = 0) {
        document.querySelector(parent).innerHTML = "";
        this.main.createElement("h2", parent, "Location");

        const div = this.main.createElement("div", parent);
        const buttonLeft = this.main.createElement("div", div);
        const buttonRight = this.main.createElement("div", div);
        buttonLeft.addEventListener("click", () => {
            if (Object.keys(images).length + 1 >= i && i - 1 > -1) {
                this.createSlider(text, images, parent, i - 1);
            }
        });
        buttonRight.addEventListener("click", () => {
            if (Object.keys(images).length - 1 > i && i + 1 > -1) {
                this.createSlider(text, images, parent, i + 1);
            }
        });
        buttonLeft.classList.add("button-left-slider");
        buttonRight.classList.add("button-right-slider");
        this.main.createElement("p", div, text[i]);
        div.classList.add("location-slider");
        const image = this.main.createElement("img", div);
        image.src = imagesPath[i];
    }

    init() {
        this.createSections();
        this.createSlider(imagesText, imagesPath, ".location");
    }
}

export default CreateAboutPage;

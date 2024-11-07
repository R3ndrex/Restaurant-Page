import Pizza4Cheeses from "../images/Pizza4Cheeses.jpg";
import PizzaSalami from "../images/PizzaSalami.png";
import PizzaTexas from "../images/PizzaTexas.jpg";
import PizzaBavaria from "../images/PizzaBavaria.jpg";
import PizzaHawaiian from "../images/PizzaHawaiian.jpg";

const menuListButtons = ["All", "Popular", "Sale"];
const menuItems = {
    "4 cheeses": {
        ingredients:
            "Alfredo sauce, mozzarella, cheddar, Bergader, feta, almond flakes",
        image: Pizza4Cheeses,
        sale: true,
        popularity: 5,
    },
    Salami: {
        ingredients: "Our pizzeria sauce, mozzarella, sausages, pepperoni",
        image: PizzaSalami,
        sale: false,
        popularity: 4,
    },
    Texas: {
        ingredients:
            "Bavarian sausages, mozzarella, onion, corn, mushrooms, barbecue sauce",
        image: PizzaTexas,
        sale: false,
        popularity: 7,
    },
    Bavaria: {
        ingredients:
            "Tomatoes, mozzarella, hunting and Munich sausages, mustard, fresh mushrooms",
        image: PizzaBavaria,
        sale: false,
        popularity: 2,
    },
    Hawaiian: {
        ingredients: "Chicken fillet, pineapple, corn, hard cheese, cream",
        image: PizzaHawaiian,
        sale: true,
        popularity: 1,
    },
};

const menuListFunctions = [
    function showDefault() {
        return menuItems;
    },
    function sortByPopularity(pizzas) {
        return Object.fromEntries(
            Object.entries(pizzas).sort(
                ([, pizza1], [, pizza2]) =>
                    pizza2.popularity - pizza1.popularity
            )
        );
    },

    function sortBySale(pizzas) {
        return Object.fromEntries(
            Object.entries(pizzas).filter(([key, pizza]) => pizza.sale)
        );
    },
];

class CreateMenuPage {
    constructor(createPageObject) {
        this.main = createPageObject;
        const article = (this.article = this.main.createElement("article"));
        article.classList.add("menu");
    }
    init() {
        const section = this.main.createElement("section", this.article);
        const section2 = this.main.createElement("section", this.article);
        this.createMenuList(menuItems, section, section2);
        this.createMenuItems(menuItems, section2);
    }
    createMenuList(pizzas, section, section2) {
        this.main.createElement("h2", section, "Menu");
        const ul = this.main.createElement("ul", section);
        ul.classList.add("menu-list");
        for (let i = 0; i < menuListButtons.length; i++) {
            const li = this.main.createElement("li", ul);
            const button = this.main.createElement(
                "button",
                li,
                menuListButtons[i]
            );
            button.addEventListener("click", () => {
                const newPizzas = menuListFunctions[i](pizzas);
                this.createMenuItems(newPizzas, section2);
            });
        }
    }
    createMenuItems(pizzas, section) {
        section.innerHTML = "";
        const ul = this.main.createElement("ul", section);
        ul.classList.add("menu-items");
        for (const pizza in pizzas) {
            if (Object.prototype.hasOwnProperty.call(pizzas, pizza)) {
                const element = pizzas[pizza];
                const li = this.main.createElement("li", ul);
                this.main.createImage(element.image, li, pizza);
                this.main.createElement("h3", li, pizza);
                this.main.createElement("p", li, element.ingredients);
                this.main.createElement("button", li, "Order Now");
            }
        }
    }
}

export default CreateMenuPage;

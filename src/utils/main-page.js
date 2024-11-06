const HeaderText = {
    0: "Our Pizzeria",
    1: "Our Menu",
    2: "Time",
    3: "Order Online",
};

const pText = {
    0: `Whether you’re visiting us for a quick lunch, a family gathering, or a late-night craving, our team is here to make you feel at home with a slice that’s more than just pizza—it’s part of our family. Come in, relax, and let us share a piece of our story with you—one delicious bite at a time.`,
    1: `Explore our menu and discover a variety of pizzas crafted for every palate. From the simplicity of a Neapolitan Margherita with fresh mozzarella, basil, and tomato sauce, to bold and creative options like our Truffle & Mushroom pizza, each dish is made to order and cooked to perfection. In addition to pizzas, our menu features fresh salads, Italian-inspired appetizers, and delicious desserts to complete your meal.`,
    2: `Come savor our pizzas during our open hours – freshly made, just for you!`,
    3: `Enjoy the taste of Our Pizza wherever you are! We offer easy online ordering for those nights when you want the comfort of our pizza at home, as well as take-out and delivery options.`,
};

const weekDays = {
    0: [`Monday:`, `10:00-20:00`],
    1: [`Tuesday:`, `10:00-20:00`],
    2: [`Wednesday:`, `10:00-20:00`],
    3: [`Thursday:`, `10:00-20:00`],
    4: [`Friday:`, `10:00-20:00`],
    5: [`Saturday:`, `10:00-18:00`],
    6: [`Sunday:`, `10:00-18:00`],
};

class CreateMain {
    constructor(createPageObject) {
        this.main = createPageObject;
        const article = this.main.createElement("article");
        article.classList.add("main");
    }
    CreateSchedule(days, parent) {
        const ul = this.main.createElement("ul", parent);
        for (let j = 0; j < days; j++) {
            const li = this.main.createElement("li", ul);
            li.innerHTML = `<span>${weekDays[j][0]}</span> <span>${weekDays[j][1]}</span>`;
        }
    }
    init() {
        for (let i = 0; i <= 4; i++) {
            const section = this.main.createElement("section", "article");
            this.main.createElement("h2", section, HeaderText[i]);
            this.main.createElement("p", section, pText[i]);

            if (HeaderText[i] === "Time") {
                this.CreateSchedule(7, section);
            }
            if (HeaderText[i] === "Order Online") {
                this.main.createElement("button", section, "Order Now");
            }
        }
    }
}

export default CreateMain;

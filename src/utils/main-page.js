const HeaderText = ["Our Pizzeria", "Our Menu", "Time", "Order Online"];
const pText = [
    `Whether you’re visiting us for a quick lunch, a family gathering, or a late-night craving, our team is here to make you feel at home with a slice that’s more than just pizza—it’s part of our family. Come in, relax, and let us share a piece of our story with you—one delicious bite at a time.`,
    `Explore our menu and discover a variety of pizzas crafted for every palate. From the simplicity of a Neapolitan Margherita with fresh mozzarella, basil, and tomato sauce, to bold and creative options like our Truffle & Mushroom pizza, each dish is made to order and cooked to perfection. In addition to pizzas, our menu features fresh salads, Italian-inspired appetizers, and delicious desserts to complete your meal.`,
    `Come savor our pizzas during our open hours – freshly made, just for you!`,
    `Enjoy the taste of Our Pizza wherever you are! We offer easy online ordering for those nights when you want the comfort of our pizza at home, as well as take-out and delivery options.`,
];

const weekDays = {
    Monday: `10:00-20:00`,
    Tuesday: `10:00-20:00`,
    Wednesday: `10:00-20:00`,
    Thursday: `10:00-20:00`,
    Friday: `10:00-20:00`,
    Saturday: `10:00-18:00`,
    Sunday: `10:00-18:00`,
};

class CreateMain {
    constructor(createPageObject) {
        this.main = createPageObject;
        const article = this.main.createElement("article");
        article.classList.add("main");
    }
    #CreateSchedule(days, parent) {
        const ul = this.main.createElement("ul", parent);
        for (const day in days) {
            if (Object.prototype.hasOwnProperty.call(days, day)) {
                const li = this.main.createElement("li", ul);
                li.innerHTML = `<span>${day}</span> <span>${days[day]}</span>`;
            }
        }
    }
    init() {
        for (let i = 0; i <= 4; i++) {
            const section = this.main.createElement("section", "article");
            this.main.createElement("h2", section, HeaderText[i]);
            this.main.createElement("p", section, pText[i]);
            if (HeaderText[i] === "Time") {
                this.#CreateSchedule(weekDays, section);
            }
            if (HeaderText[i] === "Order Online") {
                this.main.createElement("button", section, "Order Now");
            }
        }
    }
}

export default CreateMain;

class CreatePage {
    constructor(parent) {
        this.parentNode = parent;
    }
    createElement(name, parent = this.parentNode, text = "") {
        const element = document.createElement(name);
        element.textContent = text;
        if (parent instanceof Node) {
            parent.appendChild(element);
        } else {
            const parentNode = document.querySelector(parent);
            parentNode.appendChild(element);
        }
        return element;
    }
    clearPage() {
        this.parentNode.innerHTML = "";
    }
}
export default CreatePage;

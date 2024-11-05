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
    createImage(src, parent, alt = "") {
        const image = this.createElement("img", parent);
        image.src = src;
        image.alt = alt;
        return image;
    }
}
export default CreatePage;

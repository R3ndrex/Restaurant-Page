class CreateMenuPage {
    constructor(createPageObject) {
        this.main = createPageObject;
        const article = (this.article = this.main.createElement("article"));
        article.classList.add("menu");
    }
}

export default CreateMenuPage;

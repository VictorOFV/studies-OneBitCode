class Component {
    #reference = null

    constructor(elementName, text = "", id = "default", className = "default") {
        this.elementName = elementName
        this.text = text
        this.id = id
        this.className = className
        this.build()
    }

    getReference() {
        return this.#reference
    }

    build() {
        this.#reference = document.createElement(this.elementName)
        this.#reference.innerText = this.text
        this.#reference.id = this.id
        this.#reference.classList.add(this.className)
    }

    render(component) {
        component.appendChild(this.#reference)
    }
}

export default Component
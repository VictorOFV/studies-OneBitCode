import Component from "./Component.js";

class Label extends Component {
    constructor(text, htmlFor, id = "default", className = "default") {
        super("label", text, id, className)
        const reference = this.getReference()
        reference.htmlFor = htmlFor
    }
}

export default Label
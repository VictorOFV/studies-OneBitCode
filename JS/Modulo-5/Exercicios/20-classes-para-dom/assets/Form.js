import Component from "./Component.js"

class Form extends Component {
    constructor(id = "default", className = "default") {
        super("form", "", id, className)
    }

    addChildElements(...element){
        this.getReference().append(...element)
    }
}

export default Form
import Component from "./Component.js";

class Input extends Component {
    constructor(type = "text", value = "", placeholder = "", readOnly = false, required = false, name = "", id = "default", className = "default") {
        super("input", "", id, className);
        const reference = this.getReference();
        reference.type = type;
        reference.value = value;
        reference.name = name;
        reference.placeholder = placeholder;
        reference.required = required;
        reference.readOnly = readOnly;
    }
}

export default Input;

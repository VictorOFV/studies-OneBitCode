import Component from "./Component.js"

class Form extends Component{
    constructor(parent, options){
        super('form', parent, options)
    }

    addChildren(...elements){
        elements.forEach(element => {
            this.getElement().appendChild(element.getElement())
        })
    }
}

export default Form
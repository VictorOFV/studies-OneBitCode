    import Component from "./assets/Component.js";
    import Input from "./assets/Input.js";
    import Label from "./assets/Label.js";
    import Form from "./assets/Form.js";

    const main = document.querySelector('main')

    const h1 = new Component("h1", "Que dia bonito!")
    h1.render(main)
    h1.build()

    const label = new Label("Digite seu nome: ", "name").getReference()
    const input = new Input("text", "", "Digite seu Nome", false, true, "name", "name").getReference()
    const button = new Input("submit", "Enviar").getReference()

    const br = new Component("br").getReference()
    const br2 = new Component("br").getReference()

    const inputRadio1 = new Input("radio", "Homem", "", false, true, "sex", "men").getReference()
    const labelRadio1 = new Label("Homem", "men").getReference()
    const inputRadio2 = new Input("radio", "Mulher", "", false, true, "sex", "woman").getReference()
    const labelRadio2 = new Label("Mulher", "woman").getReference()

    const form = new Form()
    form.addChildElements(label, input, br, inputRadio1, labelRadio1, inputRadio2, labelRadio2, br2, button)
    form.render(main)
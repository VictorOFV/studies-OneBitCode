import Component from "./assets/Component.js";
import Form from "./assets/Form.js";
import Label from "./assets/Label.js";
import Input from "./assets/Input.js";

const title = new Component("h1", "body", {innerText: "Formulario!!!"})
title.render()

const form = new Form('body')
form.addChildren(
    new Label("Nome: ", form, {htmlFor: "name"}),
    new Input(form, {type: "text", placeholder: "Digite seu nome aqui!", id: "name", name: "name"}),
    new Component("br"),
    new Component("p", form, {innerText: "Sexo:"}),
    new Input(form, {type: "radio", value: "Homem", id: "men", name: "sex"}),
    new Label("Homem", form, {htmlFor: "men"}),
    new Input(form, {type: "radio", value: "Mulher", id: "woman", name: "sex"}),
    new Label("Mulher", form, {htmlFor: "woman"}),
    new Component("br"),
    new Component("br"),
    new Input(form, {type: "submit", value: "Enviar"})
)

form.render()
import { useState } from "react"
import Button from "../Button"
import Input from "../Input"
import styles from "./styles.module.scss"

function FormGame({ addGameList }) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")

    const handleSubmit = (ev) => {
        ev.preventDefault()
        addGameList(name, image)
        setName("")
        setImage("")
    }

    return (
        <form className={styles.formGame}>
            <Input label={"Nome:"} id={"nameGame"} type={"text"} value={name} func={(ev) => setName(ev.target.value)} />
            <Input label={"Imagem:"} id={"imageGame"} type={"text"} value={image} func={(ev) => setImage(ev.target.value)} />
            <Button type={"submit"} text={"Adicionar"} event={handleSubmit} />
        </form>
    )
}

export default FormGame
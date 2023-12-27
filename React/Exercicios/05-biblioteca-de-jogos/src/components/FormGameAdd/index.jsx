import { useState } from "react"
import Button from "../Button"
import Input from "../Input"
import styles from "./styles.module.scss"

function FormGame({ setListGame }) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    
    const addGameList = (ev) => {
        ev.preventDefault()

        if(!name && !image) return

        setListGame(state => {
            const id = Math.floor(Math.random() * 1000000)
            return [...state, {name, image, id}]
        })
        setName("")
        setImage("")
    }
 
    return (
        <form className={styles.formGame}>
            <Input label={"Nome:"} id={"nameGame"} type={"text"} value={name} func={(ev) => setName(ev.target.value)}/>
            <Input label={"Imagem:"} id={"imageGame"} type={"text"} value={image} func={(ev) => setImage(ev.target.value)}/>
            <Button type={"submit"} text={"Adicionar"} event={addGameList}/>
        </form>
    )
}

export default FormGame
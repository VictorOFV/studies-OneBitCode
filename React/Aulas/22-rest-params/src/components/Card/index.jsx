import { useState } from "react"
import Button from "../Button"
import CardDescription from "./CardDescription"
import CardTitle from "./CardTitle"
import styles from "./styles.module.scss"

function Card({ img, title, description }) {
    const [followText, setFollowText] = useState("Seguir")
    
    function follow() {
        setFollowText(followText === "Seguir" ? "Seguindo" : "Seguir")
    }

    return (

        <div className={styles.card}>
            <img src={img} alt={`${title} - Icon`} />
            <CardTitle data-name="name" id="name">
                {title}
                <Button
                 onClick={follow}
                 className={styles.buttonFollow} id="followBtn">{followText}</Button>
            </CardTitle>
            <CardDescription id="description" data-description="Descrição...">
                {description}
            </CardDescription>
            <Button id="button-card" className={styles.buttonCardMore} data-button="Veja Mais">
                Ver Mais!
            </Button>
        </div>
    )
}

export default Card
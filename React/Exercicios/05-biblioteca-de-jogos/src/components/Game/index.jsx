import Button from "../Button";
import styles from "./styles.module.scss";

function ListGames({ name, image, onRemove }) {
    return (
        <div className={styles.game}>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <Button type={"button"} text={"Remover"} event={onRemove}/>
        </div>
    )
}

export default ListGames
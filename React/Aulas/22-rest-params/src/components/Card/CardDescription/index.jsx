import styles from "./styles.module.scss"

function CardDescription(props) {
    return (
        <p {...props} className={`${styles.description} ${props.className}`}>
            {props.children}
        </p>
    )
}

export default CardDescription
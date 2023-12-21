import styles from "./styles.module.scss"

function CardTitle(props) {
    return (
        <h1 {...props} className={`${props.className} ${styles.title}`}>
            <div className={styles.titleContainer}>
                {props.children}
            </div>
        </h1>
    )
}

export default CardTitle
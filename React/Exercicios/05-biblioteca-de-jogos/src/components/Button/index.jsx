import styles from "./styles.module.scss"

function Button({type, text, event}) {
    return <button className={styles.button} onClick={event} type={type}>{text}</button>
}

export default Button
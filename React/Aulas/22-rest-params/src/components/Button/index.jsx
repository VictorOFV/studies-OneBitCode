import styles from "./styles.module.scss"

function Button(props) {
    return (
        <button {...props} className={`${styles.button} ${props.className}`} >
            {props.children}
        </button>
    )
}

export default Button
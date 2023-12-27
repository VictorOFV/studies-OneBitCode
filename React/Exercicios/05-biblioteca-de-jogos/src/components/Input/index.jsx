import styles from "./styles.module.scss"

function Input({ id, label, type, value, func}) {
    return (
        <div className={styles.input}>
            <label htmlFor={id}>{label}</label>
            <input value={value} type={type} id={id} onChange={func}/>
        </div>
    )
}

export default Input
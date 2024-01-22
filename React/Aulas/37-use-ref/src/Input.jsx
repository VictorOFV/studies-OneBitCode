import { useRef } from "react"

function Input() {
    const ref = useRef(null)

    const handleCLick = () => {
        ref.current.focus()
        ref.current.style.backgroundColor = "#ff7897";
        ref.current.style.color = "#fff";
    }

    return (
        <div>
            <input ref={ref} type="text" />
            <button onClick={handleCLick}>Focar Botão</button>
        </div>
    )
}

export default Input
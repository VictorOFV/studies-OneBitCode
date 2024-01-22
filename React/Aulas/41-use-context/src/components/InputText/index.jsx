import { useContext } from "react"
import searchContext from "../../context/searchContext"

function InputText() {
    const { search, setSearch, handleClick } = useContext(searchContext)
    
    return (
        <div>
            <input
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
                type="text" />
            <button
            onClick={handleClick}
            >Pesquisar</button>
        </div>
    )
}

export default InputText
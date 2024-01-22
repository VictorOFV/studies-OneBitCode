import { useContext } from "react"
import userContext from "../../context/userContext"

function Header() {
    const user = useContext(userContext)

    return (
        <header>
            <span>Olá usuário, {user.name}!</span>
        </header>
    )
}

export default Header
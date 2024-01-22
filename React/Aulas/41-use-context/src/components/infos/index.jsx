import { useContext } from "react"
import userContext from "../../context/userContext"

function Infos() {
    const user = useContext(userContext)

    return (
        <div>
            <p>Nome: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default Infos
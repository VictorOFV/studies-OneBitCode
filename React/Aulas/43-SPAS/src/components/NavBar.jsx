import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav style={{display: "flex", gap: "1rem"}}>
            <Link to={"/"}>Pagina Inicial</Link>
            <Link to={"/produtos"}>Produtos</Link>
            <Link to={"/videos"}>Videos</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/registro"}>Registro</Link>
        </nav>
    )
}

export default NavBar
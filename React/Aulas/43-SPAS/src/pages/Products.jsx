import { Link } from "react-router-dom"
import database from "../../database.json"

function Products() {
    return (
        <div>
            <h1>Produtos</h1>
            <div>
                {database.map(product => (
                    <div key={product.id}>
                        <h2>{product.nome}</h2>
                        <p>{product.descricao}</p>
                        <Link to={`/produtos/${product.nome}`}>
                            <button>Ver</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
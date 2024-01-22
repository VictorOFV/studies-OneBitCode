import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import database from "../../database.json";

function Product() {
    const { productName } = useParams()
    const product = database.find(product => product.nome === productName)

    return (
        <div>
            <Helmet>
                <title>{product.nome}</title>
                <meta name="description" content={product.descricao} />
            </Helmet>

            <Link to={"/produtos"}>
                <button>Voltar</button>
            </Link>
            <h1>{product.nome}</h1>
            <p>{product.descricao}</p>
            <p>Valor a vista: R${product.valor}</p>
            <span>Estoque: {product.quantidade}</span>
        </div>
    )
}

export default Product
import Button from "../Button"
import "./style.scss"

function Card({title, posterImg}) {
    return (
        <div className="card">
            <img className="card_image" src={posterImg} alt={title} />
            <div>
                <h2 className="card_title">{ title }</h2>
                <p>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
                <Button buttonTitle={"Compre Agora"}/>
            </div>
        </div>
    )
}

export default Card
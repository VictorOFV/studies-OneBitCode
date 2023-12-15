import "./style.scss"

function Card() {
    return (
        <div className="card">
            <img className="card_image" src="./poster.jpg" alt="poster" />
            <div>
                <h2 className="card_title">Pôster: Star Wars (1977)</h2>
                <p>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
                <button className="card_button">Comprar Agora</button>
            </div>
        </div>
    )
}

export default Card
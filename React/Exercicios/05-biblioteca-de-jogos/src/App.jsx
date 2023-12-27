import { useState } from "react"
import FormGame from "./components/FormGameAdd"
import styles from "./styles/app.module.scss"
import Button from "./components/Button"

function App() {
  const [listGames, setListGame] = useState([])

  const removeGame = (ev) => {
    setListGame((list) => list.filter((game) => game.id !== +ev.target.parentElement.id))
  }

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Biblioteca de Jogos</h1>
      <FormGame setListGame={setListGame}/>
      <div className={styles.listGames}>
        {listGames.map(game => (
          <div key={game.id} id={game.id} className={styles.game}>
            <h2>{game.name}</h2>
            <img src={game.image} alt={game.name} />
            <Button text={"Remover"} event={removeGame}></Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
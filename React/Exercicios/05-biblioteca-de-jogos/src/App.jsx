import FormGame from "./components/FormGameAdd"
import styles from "./styles/app.module.scss"
import useGameList from "./hooks/useGameList"
import Game from "./components/Game"

function App() {
  const { listGames, addGameList, removeGameList } = useGameList()

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Biblioteca de Jogos</h1>
      <FormGame addGameList={addGameList} />
      <div className={styles.listGames}>
        {listGames.length === 0
          ? <h2>Parece que você ainda não tem jogos na biblioteca...</h2>
          : (
            listGames.map(({ id, name, image }) => (
              <Game
                key={id}
                name={name}
                image={image}
                onRemove={() => removeGameList(id)}
              />
            ))
          )}
      </div>
    </div>
  )
}

export default App
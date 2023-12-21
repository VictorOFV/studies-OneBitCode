import Card from './components/Card'
import styles from "./styles/app.module.scss"


function App() {
  return (
    <div className={styles.cardsContainer}>
      <Card img={"./vegeta.gif"} title={"Lucas Henrique"} description={"Meu Proposito é nunca desistir, estou lutando todos os dias"}/>
      <Card img={"./avatar.png"} title={"Victor Manoel"} description={"Não vou mentir, ta muito dificil! porem não vou desistir do meu sonho!"}/>
      <Card img={"./menina.jpg"} title={"Melissa Rebecca"} description={"Tranquila como as cerejeiras do japão!"}/>
    </div>

  )
}

export default App

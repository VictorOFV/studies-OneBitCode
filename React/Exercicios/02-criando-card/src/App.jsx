import Card from "./components/Card"
import img1 from "./assets/imgs/poster.jpg"
import img2 from "./assets/imgs/esb-poster.jpg"
import img3 from "./assets/imgs/rotj-poster.jpg"
import "./styles/app.scss"
import Button from "./components/Button"

function App() {

  return (
    <div className="app">
      <div className="card-container">
        <Card title={"Pôster: Star Wars (1977)"} posterImg={img1} />
        <Card title={"Pôster: Empire Strikes Back (1980)"} posterImg={img2} />
        <Card title={"Pôster: Return of the Jedi (1983)"} posterImg={img3} />
      </div>
      <div className="moreButton">
        <Button buttonTitle={"Veja Mais!"} />
      </div>
    </div>
  )
}

export default App

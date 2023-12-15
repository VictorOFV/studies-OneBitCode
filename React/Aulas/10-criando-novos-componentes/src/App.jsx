import Subtitle from "./components/Subtitle"
import Title from "./components/Title"
import Paragraph from "./components/paragraph"
import "./styles/app.scss"

function App() {
  return (
    <div className="app">
      <div>
        <Title />
        <Subtitle />
        <Paragraph />
      </div>
    </div>
  )
}

export default App
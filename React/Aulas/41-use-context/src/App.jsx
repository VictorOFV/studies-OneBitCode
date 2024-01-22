import Header from "./components/Header"
import Infos from "./components/infos"
import userContext from "./context/userContext"
import searchContext from "./context/searchContext"
import InputText from "./components/InputText"
import { useState } from "react"

function App() {
  const [search, setSearch] = useState("")
  const [infoScren, setInfoScren] = useState(null)

  const handleClick = () => {
    setInfoScren(search)
  }

  const user = {
    name: "Lucas",
    email: "lucas@gmail.com"
  }

  return (
    <userContext.Provider value={user}>
      <div>
        <Header />
        <h1>Titulo da Pagina</h1>
        <Infos />

        <searchContext.Provider value={{ search, setSearch, handleClick }}>
          <InputText />
        </searchContext.Provider>

        {infoScren && (
          <p>Texto Pesquisado: {infoScren}</p>
        )}
      </div>
    </userContext.Provider>
  )
}

export default App

function sum(a, b) {
  return a + b
}

function App() {
  const tech = "JavaScript"
  const login = true

  return (
    <div>
      <h1>{ tech }, é muito facil!</h1>
      <p>5 + 7 é igual a {sum(5, 7)}</p>
      <p>Logado? {login ? "Sim" : "Não"}</p>
    </div>
  )
}

export default App
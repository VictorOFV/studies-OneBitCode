import { useRef, useState } from "react"
import Input from "./Input"

function App() {
  let variable = 0
  const [number, setNumber] = useState(0)
  const ref = useRef(0)

  const valuesVirtual = () => {
    alert(`Variavel: ${variable}\n\nState: ${number}\n\nRef: ${ref.current}`)
  }

  return (
    <>
      <div>
        <div>
          <h2>Input Ref</h2>
          <Input />
        </div>
        <h2>Aumentando Valores</h2>
        <p>Variavel: {variable}</p>
        <p>useState: {number}</p>
        <p>useRef: {ref.current}</p>
      </div>
      <div>
        <button onClick={() => variable++}>Aumentar Variavel</button>
        <button onClick={() => setNumber(state => state + 1)}>Aumentar State</button>
        <button onClick={() => ref.current++}>Aumentar Ref</button>
        <button onClick={valuesVirtual}>Ver Valores de Memoria</button>
      </div>
    </>
  )
}

export default App

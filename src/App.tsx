import { useState } from 'react'
import './App.css'

type Operation = 'Saberi' | 'Oduzmi' | 'Pomnozi' | 'Podeli'

function App() {
  const [firstValue, setFirstValue] = useState('')
  const [secondValue, setSecondValue] = useState('')
  const [result, setResult] = useState<number | null>(null)

  const parseInputs = () => {
    const firstNumber = Number(firstValue)
    const secondNumber = Number(secondValue)

    if (firstValue.trim() === '' || secondValue.trim() === '') {
      setResult(null)
      return null
    }

    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
      setResult(null)
      return null
    }

    return { firstNumber, secondNumber }
  }

  const calculate = (operation: Operation) => {
    const values = parseInputs()

    if (!values) {
      return
    }

    const { firstNumber, secondNumber } = values

    switch (operation) {
      case 'Saberi':
        setResult(firstNumber + secondNumber)
        break
      case 'Oduzmi':
        setResult(firstNumber - secondNumber)
        break
      case 'Pomnozi':
        setResult(firstNumber * secondNumber)
        break
      case 'Podeli':
        if (secondNumber === 0) {
          setResult(null)
          return
        }

        setResult(firstNumber / secondNumber)
        break
      default:
        break
    }
  }

  const resetCalculator = () => {
    setFirstValue('')
    setSecondValue('')
    setResult(null)
  }

  return (
    <main className="app-shell">
      <section className="calculator-card">
        <h1>Kalkulator</h1>

        <div className="input-grid">
          <label className="field">
            <span>Prvi broj</span>
            <input
              type="number"
              inputMode="decimal"
              step="any"
              placeholder="Unesi prvi broj"
              value={firstValue}
              onChange={(event) => setFirstValue(event.target.value)}
            />
          </label>

          <label className="field">
            <span>Drugi broj</span>
            <input
              type="number"
              inputMode="decimal"
              step="any"
              placeholder="Unesi drugi broj"
              value={secondValue}
              onChange={(event) => setSecondValue(event.target.value)}
            />
          </label>
        </div>

        <div className="actions" aria-label="Kalkulatorske operacije">
          <button type="button" onClick={() => calculate('Saberi')}>
            +
          </button>
          <button type="button" onClick={() => calculate('Oduzmi')}>
            -
          </button>
          <button type="button" onClick={() => calculate('Pomnozi')}>
            *
          </button>
          <button type="button" onClick={() => calculate('Podeli')}>
            /
          </button>
          <button type="button" className="secondary" onClick={resetCalculator}>
            Obrisi
          </button>
        </div>

        <div className="result-panel">
          <output className="result-value">{result ?? ''}</output>
        </div>
      </section>
    </main>
  )
}

export default App

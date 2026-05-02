import { useState } from 'react'
import './App.css'

type Operation = 'Saberi' | 'Oduzmi' | 'Pomnozi' | 'Podeli'

function App() {
  const [firstValue, setFirstValue] = useState('')
  const [secondValue, setSecondValue] = useState('')
  const [result, setResult] = useState<number | null>(null)
  const [message, setMessage] = useState('Unesi dva broja i izaberi operaciju.')

  const parseInputs = () => {
    const firstNumber = Number(firstValue)
    const secondNumber = Number(secondValue)

    if (firstValue.trim() === '' || secondValue.trim() === '') {
      setResult(null)
      setMessage('Oba polja su obavezna.')
      return null
    }

    if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
      setResult(null)
      setMessage('Unesi ispravne numericke vrednosti.')
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
        setMessage('Rezultat sabiranja je prikazan ispod.')
        break
      case 'Oduzmi':
        setResult(firstNumber - secondNumber)
        setMessage('Rezultat oduzimanja je prikazan ispod.')
        break
      case 'Pomnozi':
        setResult(firstNumber * secondNumber)
        setMessage('Rezultat mnozenja je prikazan ispod.')
        break
      case 'Podeli':
        if (secondNumber === 0) {
          setResult(null)
          setMessage('Deljenje nulom nije dozvoljeno.')
          return
        }

        setResult(firstNumber / secondNumber)
        setMessage('Rezultat deljenja je prikazan ispod.')
        break
      default:
        break
    }
  }

  const resetCalculator = () => {
    setFirstValue('')
    setSecondValue('')
    setResult(null)
    setMessage('Unesi dva broja i izaberi operaciju.')
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
              placeholder="npr. 15"
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
              placeholder="npr. 5"
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
            Reset
          </button>
        </div>

        <div className="result-panel">
          <p className="status">{message}</p>
          <p className="result-label">Rezultat</p>
          <output className="result-value">{result ?? '-'}</output>
        </div>
      </section>
    </main>
  )
}

export default App

import './Calculator.css'
import { NumberInputField } from './NumberInputField'
import { OperationsPanel } from './OperationsPanel'
import { ResultDisplay } from './ResultDisplay'
import { useCalculator } from '../hooks/useCalculator'

export const Calculator = () => {
  const { inputs, result, updateInput, executeOperation, resetCalculator } = useCalculator()

  return (
    <section className="calculator-card">
      <h1>Kalkulator</h1>

      <div className="input-grid">
        <NumberInputField
          label="Prvi broj"
          placeholder="Unesi prvi broj"
          value={inputs.firstValue}
          onChange={(value) => updateInput('firstValue', value)}
        />

        <NumberInputField
          label="Drugi broj"
          placeholder="Unesi drugi broj"
          value={inputs.secondValue}
          onChange={(value) => updateInput('secondValue', value)}
        />
      </div>

      <OperationsPanel onOperationSelect={executeOperation} onReset={resetCalculator} />
      <ResultDisplay result={result} />
    </section>
  )
}

import { calculatorOperations } from '../data/calculatorOperations'
import type { OperationId } from '../types/calculator'

type OperationsPanelProps = {
  onOperationSelect: (operationId: OperationId) => void
  onReset: () => void
}

export const OperationsPanel = ({ onOperationSelect, onReset }: OperationsPanelProps) => (
  <div className="actions" aria-label="Kalkulatorske operacije">
    {calculatorOperations.map((operation) => (
      <button
        key={operation.id}
        type="button"
        aria-label={operation.label}
        onClick={() => onOperationSelect(operation.id)}
      >
        {operation.symbol}
      </button>
    ))}

    <button type="button" className="secondary" onClick={onReset}>
      Obrisi
    </button>
  </div>
)

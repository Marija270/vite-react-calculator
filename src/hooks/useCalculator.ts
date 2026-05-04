import { useState } from 'react'
import { calculateResult } from '../services/calculatorService'
import type { CalculatorInputs, OperationId } from '../types/calculator'

const initialInputs: CalculatorInputs = {
  firstValue: '',
  secondValue: '',
}

export const useCalculator = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>(initialInputs)
  const [result, setResult] = useState<number | null>(null)

  const updateInput = (field: keyof CalculatorInputs, value: string) => {
    setInputs((currentInputs) => ({
      ...currentInputs,
      [field]: value,
    }))
  }

  const executeOperation = (operationId: OperationId) => {
    const calculation = calculateResult(inputs, operationId)
    setResult(calculation.ok ? calculation.value : null)
  }

  const resetCalculator = () => {
    setInputs(initialInputs)
    setResult(null)
  }

  return {
    inputs,
    result,
    updateInput,
    executeOperation,
    resetCalculator,
  }
}

import { calculatorOperations } from '../data/calculatorOperations'
import type { CalculationResult, CalculatorInputs, CalculatorOperation, OperationId } from '../types/calculator'

const parseNumber = (value: string) => {
  if (value.trim() === '') {
    return null
  }

  const parsedValue = Number(value)

  return Number.isNaN(parsedValue) ? null : parsedValue
}

export const parseCalculatorInputs = ({ firstValue, secondValue }: CalculatorInputs) => {
  const firstNumber = parseNumber(firstValue)
  const secondNumber = parseNumber(secondValue)

  if (firstNumber === null || secondNumber === null) {
    return null
  }

  return { firstNumber, secondNumber }
}

export const getCalculatorOperation = (operationId: OperationId): CalculatorOperation | undefined =>
  calculatorOperations.find((operation) => operation.id === operationId)

export const calculateResult = (
  inputs: CalculatorInputs,
  operationId: OperationId,
): CalculationResult => {
  const parsedInputs = parseCalculatorInputs(inputs)

  if (!parsedInputs) {
    return { ok: false }
  }

  const operation = getCalculatorOperation(operationId)

  if (!operation) {
    return { ok: false }
  }

  return operation.execute(parsedInputs.firstNumber, parsedInputs.secondNumber)
}

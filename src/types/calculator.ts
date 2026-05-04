export type OperationId = 'add' | 'subtract' | 'multiply' | 'divide'

export type CalculatorInputs = {
  firstValue: string
  secondValue: string
}

export type CalculationResult =
  | {
      ok: true
      value: number
    }
  | {
      ok: false
    }

export type CalculatorOperation = {
  id: OperationId
  symbol: string
  label: string
  execute: (left: number, right: number) => CalculationResult
}

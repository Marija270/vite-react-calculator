import type { CalculatorOperation } from '../types/calculator'

export const calculatorOperations: CalculatorOperation[] = [
  {
    id: 'add',
    symbol: '+',
    label: 'Saberi',
    execute: (left, right) => ({ ok: true, value: left + right }),
  },
  {
    id: 'subtract',
    symbol: '-',
    label: 'Oduzmi',
    execute: (left, right) => ({ ok: true, value: left - right }),
  },
  {
    id: 'multiply',
    symbol: '*',
    label: 'Pomnozi',
    execute: (left, right) => ({ ok: true, value: left * right }),
  },
  {
    id: 'divide',
    symbol: '/',
    label: 'Podeli',
    execute: (left, right) => {
      if (right === 0) {
        return { ok: false }
      }

      return { ok: true, value: left / right }
    },
  },
]

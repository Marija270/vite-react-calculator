type ResultDisplayProps = {
  result: number | null
}

export const ResultDisplay = ({ result }: ResultDisplayProps) => (
  <div className="result-panel">
    <output className="result-value">{result ?? ''}</output>
  </div>
)

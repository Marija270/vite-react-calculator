type NumberInputFieldProps = {
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
}

export const NumberInputField = ({
  label,
  placeholder,
  value,
  onChange,
}: NumberInputFieldProps) => (
  <label className="field">
    <span>{label}</span>
    <input
      type="number"
      inputMode="decimal"
      step="any"
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  </label>
)

import { StyledInput } from "./Input.styles"
import { GoEye, GoEyeClosed } from "react-icons/go"
type InputProps = {
  label: string
  value: string
  type: string
  isPassword?: boolean
  onClick?: () => void
}

function Input({
  label,
  value,
  type,
  isPassword,
  onClick,
  ...props
}: InputProps) {
  const renderLabel = () => label && <label>{label}</label>
  const renderEyeIcon = () =>
    isPassword ? (
      type === "password" ? (
        <GoEyeClosed className="icon" onClick={onClick} />
      ) : (
        <GoEye className="icon" onClick={onClick} />
      )
    ) : null

    
  return (
    <StyledInput>
      {renderLabel()}
      {renderEyeIcon()}
      <input type={type} value={value} {...props} />
    </StyledInput>
  )
}
export default Input

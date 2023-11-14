import styled from "styled-components"
import Input from "../Input/Input"
import { useForm, SubmitHandler } from "react-hook-form"
import { useState } from "react"

const StyledForm = styled.form`
  display: flex;
  width: 500px;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
`
type FormInput = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({})
  const [isPassVisible, setIsPassVisible] = useState(false)
  const togglePassVisible = () => { setIsPassVisible(!isPassVisible) }

  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data)
  return (
    <StyledForm noValidate onSubmit={handleSubmit(onSubmit)}>
      <Input type="text" label="Имя" value={"f"}  />
      <Input type="email" label="Электронная почта" value={"f"} />
      <Input
        type={isPassVisible ? "text" : "password"}
        label="Пароль"
        value={"f"}
        isPassword
        onClick={togglePassVisible}
      />
      <Input
        type={isPassVisible ? "text" : "password"}
        label="Подтвердите пароль"
        value={"f"}
        isPassword
        onClick={togglePassVisible}
      />
    </StyledForm>
  )
}

export default Register

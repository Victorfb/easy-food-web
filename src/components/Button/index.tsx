import { ButtonBasic } from './styles'

interface ButtonProps {
  text: string
}

export function Button({ text }: ButtonProps) {
  return <ButtonBasic>{text}</ButtonBasic>
}

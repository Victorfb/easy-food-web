import { ButtonBasic } from './Button.styles'

interface ButtonProps {
  text: string
}

export function Button({ text }: ButtonProps) {
  return <ButtonBasic>{text}</ButtonBasic>
}

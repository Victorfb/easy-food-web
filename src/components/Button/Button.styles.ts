import styled from 'styled-components'

export const ButtonBasic = styled.button`
  width: 6rem;
  height: 2rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme.primary700};
  color: ${(props) => props.theme.neutral0};
`

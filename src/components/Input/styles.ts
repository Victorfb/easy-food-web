import styled from 'styled-components'

export const ContainerInput = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

export const Input = styled.input`
  display: flex;
  flex: 1;
  height: 3.375rem;
  padding: 0.75rem 4.5rem 0.75rem 1rem;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;

  color: ${(props) => props.theme.neutral200};
  font-family: Mulish;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.125rem; /* 112.5% */

  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.neutral600};
  background: ${(props) => props.theme.neutral700};
`

export const ButtonIcon = styled.button`
  width: 3rem;
  height: 80%;
  align-items: center;
  margin-left: -3.35rem;
  background: ${(props) => props.theme.neutral700};
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
`

export const Icon = styled.img``

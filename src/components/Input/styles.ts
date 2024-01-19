import styled from 'styled-components'

export const Input = styled.input`
  display: flex;
  height: 3.375rem;
  padding: 0.75rem 1rem;
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

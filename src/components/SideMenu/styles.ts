import styled from 'styled-components'

export const ContainerSide = styled.div`
  max-width: 20rem;
  height: calc(100vh);
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  padding: 1.25rem 1.875rem 1.5rem 1.875rem;
  flex-direction: column;
  align-items: center;
  gap: 4.375rem;
  flex: 1 0 0;
  align-self: stretch;
  background-color: ${(props) => props.theme.background};

  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 1);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 1);
`

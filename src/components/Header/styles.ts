import styled from 'styled-components'

export const ContainerRoot = styled.div`
  width: 100%;
  max-height: 5rem;
  margin-bottom: 5px;
  background-color: ${(props) => props.theme.neutral900};

  border-bottom-right-radius: 15px;

  display: flex;
  flex: 1;
  padding: 1.25rem 1.875rem 1.5rem 1rem;
  flex-direction: column;
  gap: 4.375rem;
  flex: 1 0 0;
  align-self: stretch;

  -webkit-box-shadow: 5px 0px 5px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 5px 0px 5px 0px rgba(0, 0, 0, 1);
  box-shadow: 5px 0px 5px 0px rgba(0, 0, 0, 1);
`

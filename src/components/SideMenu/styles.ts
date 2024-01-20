import styled from 'styled-components'

export const ContainerSide = styled.div`
  background-color: ${(props) => props.theme.white};
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

  /* backdrop-filter: blur(10rem); */

  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 1);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 1);
`

export const ButtonCircle = styled.button`
  width: 2.3rem;
  height: 2.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  position: relative;
  top: 6%;
  left: 105%;
  border-radius: 6.25rem;
  background: ${(props) => props.theme.neutral800};
  cursor: pointer;
  border: none;

  @media (max-width: 1200px) {
    top: 6%;
    left: 108%;
  }

  @media (max-width: 1100px) {
    top: 6%;
    left: 112%;
  }

  @media (max-width: 1075px) {
    top: 6%;
    left: 123%;
  }
`

export const Icon = styled.img``

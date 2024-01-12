import styled from 'styled-components'

export const ItemLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 37.25rem;
  height: calc(100vh);
  justify-content: space-between;
  align-items: space-between;
`

export const ItemRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 46.25rem;
  height: calc(100vh);
  overflow: hidden;
`

export const ItemTop = styled.div``

export const ItemBottom = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  margin-left: 3.13rem;
  margin-bottom: 3.13rem;
`

export const Title = styled.h1`
  color: ${(props) => props.theme.neutral0};
  text-align: center;
  font-family: 'Mulish', sans-serif;
  font-size: 4.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 4.875rem;
  span {
    color: ${(props) => props.theme.tertiary700};
    font-size: 4.25rem;
    font-style: normal;
    font-weight: 700 !important;
  }
`

export const Subtitle = styled.text`
  color: ${(props) => props.theme.neutral0};
  font-family: 'Mulish', sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
  text-align: justify;
`

export const LeftImg = styled.img`
  width: 27.31125rem;
  height: 27.31125rem;
  flex-shrink: 0;
  margin-left: -9rem;
  /* box-shadow: 0px 0px 15.559px 0px rgba(255, 255, 255, 0.7); */
`

export const RightImg = styled.img`
  width: 36.5rem;
  height: 36.5rem;
  flex-shrink: 0;
  margin-right: -10rem;
  /* box-shadow: 0px 0px 16.96px 0px rgba(255, 255, 255, 0.7); */
`

export const HomeContainer = styled.div`
  max-width: 100%;
  height: calc(100vh);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const EllipseRight1 = styled.div`
  width: 32.86rem;
  height: 32.86rem;
  flex-shrink: 0;

  border-radius: 32.86rem;
  border: 2px solid rgba(255, 223, 207, 0.7);

  background-color: ${(props) => props.theme.primary700};
  color: ${(props) => props.theme.neutral0};
`

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
  object-fit: cover;
  mask-image: linear-gradient(
    to top,
    transparent,
    ${(props) => props.theme.background} 90%
  );

  width: 27.31125rem;
  height: 27.31125rem;
  flex-shrink: 0;
  margin-left: -9rem;

  &:hover {
    filter: brightness(1.1);
    mask-image: none;
  }
`

export const RightImg = styled.img`
  object-fit: cover;
  mask-image: linear-gradient(
    to bottom,
    transparent,
    ${(props) => props.theme.background} 70%
  );
  filter: brightness(1.2);
  width: 36.5rem;
  height: 36.5rem;
  flex-shrink: 0;
  margin-right: -10rem;

  &:hover {
    filter: brightness(1.1);
    mask-image: none;
  }
`

export const HomeContainer = styled.div`
  max-width: 100%;
  height: calc(100vh);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

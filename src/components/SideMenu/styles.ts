import styled, { css } from 'styled-components'

export type SubItemVariant = 'CURRENT' | 'FINISH' | 'AWAITING'

interface SubItemProps {
  stage?: SubItemVariant
}

interface ListItemIconProps {
  active?: boolean
}

export const ContainerSide = styled.div`
  background-color: ${(props) => props.theme.neutral900};
  max-width: 20rem;
  height: calc(100vh);

  border-bottom-right-radius: 15px;

  display: flex;
  flex: 1;
  padding: 1.25rem 1.875rem 1.5rem 1rem;
  flex-direction: column;
  gap: 4.375rem;
  flex: 1 0 0;
  align-self: stretch;

  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 1);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 1);
`

export const ButtonCircle = styled.button`
  width: 2.3rem;
  min-height: 2.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  border-radius: 6.25rem;
  background: ${(props) => props.theme.neutral800};
  cursor: pointer;
  border: none;
  top: 7rem;
  left: 14.1rem;
`

export const Divider = styled.div`
  height: 3px;
  width: 100%;
  background-color: ${(props) => props.theme.background};
`

export const List = styled.ul``

export const ListItem = styled.li`
  position: relative;
  list-style: none;

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1rem 0;
  }
  text {
    margin-left: 0.6rem;
  }
`

export const SubList = styled.ul``

export const SubListItem = styled.li<SubItemProps>`
  list-style: none;
  margin-left: 1.5rem;

  div {
    display: flex;
    width: 100%;
    height: 3.5rem;
    align-items: center;

    ${(props) => {
      if (props.stage) {
        if (props.stage === 'CURRENT' || props.stage === 'FINISH')
          return css`
            border-left: 5px solid ${props.theme.secondary600};
            color: ${props.theme.secondary600};
          `
      }
      return css`
        border-left: 2px solid ${props.theme.gray};
        color: ${props.theme.gray};
      `
    }};
    padding-left: 1.5rem;
  }
`

export const ListItemIcon = styled.div<ListItemIconProps>`
  display: flex;
  padding: 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  height: 3rem;
  width: 3rem;
  border-radius: 1rem;
  cursor: pointer;

  background-color: ${(props) =>
    props.active ? props.theme.secondary600 : 'transparent'};
`

export const Icon = styled.img``

export const Logo = styled.text`
  color: ${(props) => props.theme.neutral0};
  text-align: center;
  font-family: 'Mulish', sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  padding-top: 0.5rem;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 1);

  span {
    color: ${(props) => props.theme.tertiary700};
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 900 !important;
  }
`

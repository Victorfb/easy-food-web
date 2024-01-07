import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
      background-color: ${(props) => props.theme.background};
      color: ${(props) => props.theme.neutral0};
  }

  body, button {
   font-family: 'Mulish', sans-serif;
   font-size: 1rem;
   font-style: normal;
   font-weight: 600;
   line-height: 1.375rem;
  }
`

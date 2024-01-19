import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :focus{
      outline: transparent;
      box-shadow: 0 0 0 2px ${(props) => props.theme.primary600};
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
      background-image: linear-gradient(
         to right,
         ${(props) => props.theme.background} 25%,
         ${(props) => props.theme.tertiary700} 140%
      );
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

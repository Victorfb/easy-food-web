import { ThemeProvider } from 'styled-components'
import { darkTheme } from './styles/themes/dark'
// import { lightTheme } from "./styles/themes/light";
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

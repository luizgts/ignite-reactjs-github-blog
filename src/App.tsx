import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./themes/global";
import { defaultTheme } from "./themes/defaultTheme";
import { Routes } from "./routes";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  )
}

import React from "react"
import { ThemeProvider } from "emotion-theming"
import { theme } from "./shared"
import { Main } from "./features"

export const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Main />
  </ThemeProvider>
)

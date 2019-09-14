import React from "react"
import { ThemeProvider } from "emotion-theming"
import { theme } from "./shared"
import { Main } from "./features"
import { Helmet } from "react-helmet"

export const getPersonName = (window: Window) => {
  let params = new URLSearchParams(window.location.search)
  return params.get("name") === "jay" ? "jay" : "emily"
}

export const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1)

export const App: React.FC = () => {
  const name = getPersonName(window)
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>{capitalize(name)} Spend</title>
        <link rel="shortcut icon" href={`${name}-favicon.ico`} />
        <link rel="apple-touch-icon" href={`${name}-apple-touch-icon.png`} />
      </Helmet>
      <Main name={name} />
    </ThemeProvider>
  )
}

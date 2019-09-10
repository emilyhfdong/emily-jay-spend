export const theme = {
  breakpoints: ["576px", "768px", "992px", "1200px"],
  colors: {
    white: "#ffffff",
    gradient1: ["#A95091", "#E96B7E", "#FF906B", "#FFB860", "#FFE066"],
    gradient2: ["#6B347F", "#3C6DAA", "#1297B7", "#00B7A1", "#2FC38A"]
  },
  fontSizes: [12, 16, 20, 100]
}

// @ts-ignore
theme.fontSizes.subtitle = theme.fontSizes[0]
// @ts-ignore
theme.fontSizes.title = theme.fontSizes[1]
// @ts-ignore
theme.fontSizes.date = theme.fontSizes[2]
// @ts-ignore
theme.fontSizes.header = theme.fontSizes[3]

export const primaryGradient = `linear-gradient(
    to top right, 
    ${theme.colors.gradient1[0]}, 
    ${theme.colors.gradient1[1]}, 
    ${theme.colors.gradient1[2]},
    ${theme.colors.gradient1[3]},
    ${theme.colors.gradient1[4]}
  )
`

export const secondaryGradient = `linear-gradient(
  to top right, 
  ${theme.colors.gradient2[0]}, 
  ${theme.colors.gradient2[1]}, 
  ${theme.colors.gradient2[2]},
  ${theme.colors.gradient2[3]},
  ${theme.colors.gradient2[4]}
)
`

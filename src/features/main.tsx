import React from "react"
import { Text, Box, Button } from "rebass"
import { primaryGradient, secondaryGradient } from "../shared"
import { ItemList } from "./item-list"

const getPersonName = (window: Window) =>
  window.location.pathname.substring(1).toLowerCase() === "jay"
    ? "jay"
    : "emily"

export const Main: React.FC<{}> = () => {
  const name = getPersonName(window)
  console.log("hii", name)

  return (
    <div>
      <Box
        height="100vh"
        sx={{
          position: "fixed",
          backgroundImage: name === "jay" ? secondaryGradient : primaryGradient,
          display: "flex",
          flexDirection: "column",
          overflow: "scroll"
        }}
        pt="25vh"
        pb="12rem"
      >
        <ItemList />
      </Box>
      <Button
        bg={`gradient${name === "emily" ? "1" : "2"}.1`}
        sx={{
          position: "fixed",
          bottom: "0.5rem",
          right: "0.5rem",
          borderRadius: "2.1rem",
          height: "4.2rem",
          width: "4.2rem",
          outline: "none",
          ":active": {
            backgroundColor: `gradient${name === "emily" ? "1" : "2"}.2`
          }
        }}
      >
        <Text>+</Text>
      </Button>
    </div>
  )
}

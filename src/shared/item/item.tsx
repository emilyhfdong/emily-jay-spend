import React from "react"
import foodIcon from "../../assets/food.png"
import groceriesIcon from "../../assets/groceries.png"
import hydroIcon from "../../assets/hydro.png"
import otherIcon from "../../assets/other.png"
import wifiIcon from "../../assets/wifi.png"
import { Box, Image, Flex, Text } from "rebass"
import moment from "moment"

type TCategory = "food" | "groceries" | "hydro" | "wifi" | "other"

interface IProps {
  category?: TCategory
  title: string
  name: string
  date: number
}

const categoryToIcon = {
  food: foodIcon,
  groceries: groceriesIcon,
  hydro: hydroIcon,
  other: otherIcon,
  wifi: wifiIcon
}

export const Item: React.SFC<IProps> = ({
  category = "other",
  title,
  name,
  date
}) => (
  <Box width="100vw" pb="0.5rem">
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr 1fr",
        width: "92vw",
        height: "4.2rem",
        borderTopRightRadius: "2.1rem",
        borderBottomRightRadius: "2.1rem"
      }}
      backgroundColor="rgba(255, 255, 255, 0.1)"
    >
      <Flex justifyContent="center" alignItems="center">
        <Image width="1.75rem" height="auto" src={categoryToIcon[category]} />
      </Flex>
      <Flex flexDirection="column" justifyContent="center">
        <Text color="white" fontSize="title" mb="0.05rem">
          {title}
        </Text>
        <Text fontWeight="lighter" color="white" fontSize="subtitle">
          {name}
        </Text>
      </Flex>
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Text color="white" fontWeight="lighter" fontSize="subtitle">
          {getMonth(date)}
        </Text>
        <Text color="white" fontSize="date" pb="0.02rem">
          {getDay(date)}
        </Text>
      </Flex>
    </Box>
  </Box>
)

const getMonth = (date: number) =>
  moment
    .unix(date)
    .format("MMM")
    .toLowerCase()
const getDay = (date: number) => {
  const day = moment.unix(date).format("D")
  return day.length === 1 ? `0${day}` : day
}

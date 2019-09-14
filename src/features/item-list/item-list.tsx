import React from "react"
import { Item } from "../../shared"
import { Box } from "rebass"

export const ItemList: React.SFC<{}> = () => (
  <Box>
    <Item
      title="Groceries"
      name="emily"
      date={1568001497}
      category="groceries"
      amount={51.6}
    />
    <Item
      title="Popeyes"
      name="emily"
      date={1568001497}
      category="food"
      amount={10.76}
    />
    <Item
      title="September Hydro"
      name="jay"
      date={1568001497}
      category="hydro"
      amount={45}
    />
    <Item
      title="September wifi"
      name="emily"
      date={1568001497}
      category="wifi"
      amount={35}
    />
    <Item
      title="Whiteboard markers"
      name="emily"
      date={1568001497}
      category="other"
      amount={5.687}
    />
    <Item
      title="Whiteboard markers"
      name="emily"
      date={1568001497}
      category="other"
      amount={5.687}
    />
    <Item
      title="Whiteboard markers"
      name="emily"
      date={1568001497}
      category="other"
      amount={5.687}
    />
    <Item
      title="Whiteboard markers"
      name="emily"
      date={1568001497}
      category="other"
      amount={5.687}
    />
    <Item
      title="Whiteboard markers"
      name="emily"
      date={1568001497}
      category="other"
      amount={5.687}
    />
  </Box>
)

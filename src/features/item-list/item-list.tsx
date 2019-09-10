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
    />
    <Item title="Popeyes" name="emily" date={1568001497} category="food" />
    <Item
      title="September Hydro"
      name="jay"
      date={1568001497}
      category="hydro"
    />
    <Item
      title="September wifi"
      name="emily"
      date={1568001497}
      category="wifi"
    />
    <Item
      title="Whiteboard markers"
      name="emily"
      date={1568001497}
      category="other"
    />
    <Item
      title="Whiteboard markers"
      name="emily"
      date={1568001497}
      category="other"
    />
    <Item
      title="Whiteboard markers"
      name="emily"
      date={1568001497}
      category="other"
    />
    <Item
      title="Whiteboard markers"
      name="emily"
      date={1568001497}
      category="other"
    />
    <Item
      title="Whiteboard markers"
      name="emily"
      date={1568001497}
      category="other"
    />
  </Box>
)

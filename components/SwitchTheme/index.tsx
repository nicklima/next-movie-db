import { useStore } from "store"
import { Sun, Moon } from "icons"

import { GridSwitch, Switch, Slider, Button } from "./styled"

const SwitchTheme = () => {
  const { setTheme, themeMode } = useStore()

  const handleTheme = () => {
    if (themeMode === "dark") setTheme("light")
    if (themeMode === "light") setTheme("dark")
  }

  return (
    <GridSwitch onClick={() => handleTheme()}>
      <Button active={themeMode === "light"}>
        <Sun />
      </Button>
      <Switch>
        <Slider active={themeMode === "dark"} />
      </Switch>
      <Button active={themeMode === "dark"}>
        <Moon />
      </Button>
    </GridSwitch>
  )
}

export default SwitchTheme

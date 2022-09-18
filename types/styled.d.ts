import "styled-components"

declare module "styled-components" {
  interface IThemeColors {
    white: string
    black: string
    bg: string
    text: string
    primary: string
    secondary: string
    banner: string
    bannerGradient: string
  }

  export interface IThemeColorsOptions {
    dark: IThemeColors
    light: IThemeColors
  }

  export interface DefaultTheme {
    colors: IThemeColors
  }
}

import { AppProps } from "next/app"
import { IThemeColorsOptions, ThemeProvider } from "styled-components"

import { useStore } from "store"
import { GlobalStyle, theme } from "styles"

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { themeMode } = useStore()

  return (
    <ThemeProvider theme={theme[themeMode as keyof IThemeColorsOptions] as any}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp

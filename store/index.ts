import create from "zustand"

interface IThemeStore {
  themeMode: string
  setTheme: (themeMode: string) => void
}

export const useStore = create<IThemeStore>((set) => ({
  themeMode: "dark",
  setTheme: (themeMode) =>
    set(() => ({
      themeMode,
    })),
}))

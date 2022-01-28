export type GlobalContextProps = {
  theme: string
  setTheme: (theme: string) => void
}

export const DEFAULT_GLOBAL_CONTEXT: GlobalContextProps = {
  theme: 'light',
  setTheme: (_theme: string) => {},
}

export const GlobalContext = React.createContext<GlobalContextProps>(
  DEFAULT_GLOBAL_CONTEXT
)

// TODO: for theming, could use below
// import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
// import { ActionIcon, useMantineColorScheme } from '@mantine/core';

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

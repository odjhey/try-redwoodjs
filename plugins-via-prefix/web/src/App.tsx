import { useEffect, useState } from 'react'
import { AuthProvider } from '@redwoodjs/auth'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import { MantineProvider } from '@mantine/core'
import { useLocalStorageValue } from '@mantine/hooks'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import { GlobalContext } from 'src/contexts/GlobalContext'

import './scaffold.css'
import './index.css'

const App = () => {
  const [colorScheme, setColorScheme] = useLocalStorageValue<'light' | 'dark'>({
    key: 'color-scheme',
    defaultValue: 'light',
  })
  const [theme, setTheme] = useState<'light' | 'dark'>(colorScheme)

  const setThemeContext = (theme) => {
    setTheme(() => (theme === 'light' ? 'light' : 'dark'))
  }

  useEffect(() => {
    setColorScheme(() => theme)
  }, [theme, setColorScheme])

  return (
    <GlobalContext.Provider value={{ theme, setTheme: setThemeContext }}>
      <FatalErrorBoundary page={FatalErrorPage}>
        <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
          <MantineProvider theme={{ colorScheme: theme }}>
            <AuthProvider type="dbAuth">
              <RedwoodApolloProvider>
                <Routes />
              </RedwoodApolloProvider>
            </AuthProvider>
          </MantineProvider>
        </RedwoodProvider>
      </FatalErrorBoundary>
    </GlobalContext.Provider>
  )
}

export default App

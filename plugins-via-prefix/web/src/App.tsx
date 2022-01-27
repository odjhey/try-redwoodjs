import { useState } from 'react'
import { AuthProvider } from '@redwoodjs/auth'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import { MantineProvider } from '@mantine/core'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import { GlobalContext } from 'src/contexts/GlobalContext'

import './scaffold.css'
import './index.css'

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const setThemeContext = (theme) => {
    setTheme(() => (theme === 'light' ? 'light' : 'dark'))
  }

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

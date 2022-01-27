import { useState, useContext, useEffect } from 'react'
import { GlobalContext } from 'src/contexts/GlobalContext'

const useThemeSwitcher = () => {
  const context = useContext(GlobalContext)
  const [theme, setTheme] = useState(context.theme)

  const toggleLightTheme = (isLight) => {
    setTheme(() => (isLight ? 'light' : 'dark'))
  }

  useEffect(() => {
    context.setTheme(theme)
  }, [theme, context])

  return {
    theme,
    toggleLightTheme,
  }
}

export { useThemeSwitcher }

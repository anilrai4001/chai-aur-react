
import { useEffect, useState } from 'react'

import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { ThemeContextProvider } from './context/theme'

function App() {
  const [mode, setMode] = useState("light")

  const lightMode = () => {
    setMode("light")
  }

  const darkMode = () => {
    setMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(mode)
  }, [mode])
  

  return (
    <ThemeContextProvider value={{mode, lightMode, darkMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App
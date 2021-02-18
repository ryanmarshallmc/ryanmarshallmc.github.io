import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Splash from './components/Splash'
import Theme from './components/Theme'
import './styles/index.scss'

function Main() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    savedTheme && setTheme(savedTheme)
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <main className={theme}>
      <Theme current={theme} update={setTheme} />
      <Splash />
    </main>
  )
}

ReactDOM.render(<Main />, document.getElementById('RyanMcHenry'))

import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import About from './components/About'
import { Contact } from './components/Contact'
import Header from './components/Header'
import Projects from './components/Projects'
import Splash from './components/Splash'
import Theme from './components/Theme'
import './styles/index.scss'

function setViewportHeight() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`)
}

setViewportHeight()
window.addEventListener('resize', setViewportHeight)

const pages = [<Splash />, <About />, <Projects />, <Contact />]

const scrollOpacity = () => {
  const scroll = window.scrollY
  const height = window.innerHeight
  const pageScroll = scroll % height
  const progress = pageScroll / height
  const unscaled = progress > 0.5 ? 2 * (1 - progress) : progress * 2
  return Math.min(1, 2 * unscaled)
}

function Main() {
  const [theme, setTheme] = useState('light')
  const [page, setPage] = useState(0)
  const [opacity, setOpacity] = useState(scrollOpacity())

  useEffect(() => {
    window.scrollTo({ top: 0.5 * window.innerHeight })
    setTheme(localStorage.getItem('theme') || 'light')
    window.addEventListener('scroll', () => {
      if (window.scrollY < window.innerHeight * 0.5) {
        window.scrollTo({ top: 0.5 * window.innerHeight })
      }
      if (window.scrollY > window.innerHeight * 3.5) {
        window.scrollTo({ top: 3.5 * window.innerHeight })
      }
      setOpacity(scrollOpacity())
      setPage(Math.floor(window.scrollY / window.innerHeight))
    })
  }, []) // eslint-disable-line

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <main className={theme}>
      <Header />
      <Theme current={theme} update={setTheme} />
      <div
        id="ActivePage"
        style={{
          opacity,
          transform: `translateX(-${20 * (1 - opacity)}px`,
        }}
      >
        {pages[page]}
      </div>
    </main>
  )
}

ReactDOM.render(<Main />, document.getElementById('RyanMcHenry'))

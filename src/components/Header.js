import React from 'react'
import './Header.scss'

export default function Header() {
  return (
    <header>
      <h1
        onClick={() =>
          window.scrollTo({ top: window.innerHeight * 0.5, behavior: 'smooth' })
        }
      >
        ryan mcHenry
      </h1>
    </header>
  )
}

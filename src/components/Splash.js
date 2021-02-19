import React from 'react'
import './Splash.scss'

export default function Splash() {
  return (
    <section id="Splash">
      <img src="/ryan.png" alt="Ryan" />
      <h2>hi, i'm ryan (mcHenry).</h2>
      <div
        id="Arrow"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight * 1.5, behavior: 'smooth' })
        }
      >
        <div>
          <div />
        </div>
      </div>
    </section>
  )
}

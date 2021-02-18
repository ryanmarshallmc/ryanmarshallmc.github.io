import React from 'react'
import './Splash.scss'

export default function Splash() {
  return (
    <section id="Splash">
      <div className="Row">
        {['R', 'Y', 'A', 'N'].map(i => (
          <div key={i} className="Letter">
            {i}
          </div>
        ))}
        <img src="/ryan.png" alt="Ryan" />
      </div>
      <div className="Row">
        {['M', 'c', 'H', 'E', 'N', 'R', 'Y'].map(i => (
          <div key={i} className="Letter">
            {i}
          </div>
        ))}
      </div>
    </section>
  )
}

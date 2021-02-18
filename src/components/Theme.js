import React from 'react'
import './Theme.scss'
const themes = ['light', 'dark']

export default function Theme({ current, update }) {
  return (
    <aside id="Theme" className={current}>
      <button
        id="Toggle"
        onClick={() => update(themes.find(i => i !== current))}
      >
        <i className={current === 'light' ? 'fa fa-sun' : 'fa fa-moon'} />
      </button>
    </aside>
  )
}

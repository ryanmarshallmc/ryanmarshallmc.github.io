import React from 'react'
import './Input.scss'

export default function Input({
  id = null,
  className = null,
  type = 'text',
  label,
  value = '',
  onChange,
  error = false,
  validated = false,
  style,
}) {
  return (
    <div
      id={id}
      className={`Input${className ? ` ${className}` : ''}${
        !value.length ? ' empty' : ''
      }`}
      style={style}
    >
      {type === 'textarea' ? (
        <textarea
          className={error ? 'error' : validated ? 'validated' : ''}
          rows={3}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          className={error ? 'error' : validated ? 'validated' : ''}
          type={type}
          value={value}
          onChange={onChange}
        />
      )}
      <label htmlFor={id}>{label}</label>
      {error ? <h6 className="InputError">{error}</h6> : null}
    </div>
  )
}

import React, { useState } from 'react'
import Input from './Input'
import { ExternalLink } from '../helpers'
import './Contact.scss'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const form = document.getElementById('ContactForm')
    const data = new FormData(form)
    const req = new XMLHttpRequest()
    req.open(form.method, form.action)
    req.setRequestHeader('Accept', 'application/json')
    req.onreadystatechange = () => {
      if (req.readyState !== XMLHttpRequest.DONE) return
      if (req.status === 200) {
        setName('')
        setEmail('')
        setMessage('')
        setStatus('Thanks for reaching out!')
      } else {
        const e = JSON.parse(req.response).error
        setStatus(
          `whoops - ${
            e.includes('email')
              ? 'invalid email.'
              : 'that form data is not valid.'
          }`
        )
      }
    }
    req.send(data)
  }

  return (
    <section id="Contact">
      <h1>say hi!</h1>
      <p>
        This is the easiest way to get in touch, but you can also find me on{' '}
        <ExternalLink to="https://github.com/ryanmchenry2">Github</ExternalLink>
        ,{' '}
        <ExternalLink to="https://linkedin.com/in/ryanmchenry2">
          LinkedIn
        </ExternalLink>
        , and sometimes even{' '}
        <ExternalLink to="https://twitter.com/ryan_mchenry2">
          Twitter
        </ExternalLink>
        !
      </p>
      <Input
        type="text"
        label="Your name..."
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <Input
        type="email"
        label="Your email"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <Input
        type="textarea"
        label="What's on your mind?"
        onChange={e => setMessage(e.target.value)}
        value={message}
      />
      <div id="FormSubmit">
        <button disabled={!(name && email && message)} onClick={handleSubmit}>
          submit
        </button>
        <div>{status}</div>
      </div>

      <form
        id="ContactForm"
        action="https://formspree.io/xrgylbjz"
        method="POST"
      >
        <input value={name} type="hidden" name="name" />
        <input value={email} type="hidden" name="_replyto" />
        <input value={message} type="hidden" name="message" />
      </form>
    </section>
  )
}

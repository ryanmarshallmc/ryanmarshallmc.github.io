import React from 'react'
import { ExternalLink } from '../helpers'
import './About.scss'

export default function About() {
  return (
    <section id="About">
      <h2>my name is ryan (he, him).</h2>
      <p>
        I'm a Philadelphia based designer and developer. I work @{' '}
        <ExternalLink to="https://izotope.com">iZotope</ExternalLink> on the
        Cloud Research team, working with modern web technology to make music
        production more collaborative, and also volunteer as a mentor with{' '}
        <ExternalLink to="https://resilientcoders.org">
          Resilient Coders
        </ExternalLink>{' '}
        (go donate money if you can!)
      </p>
      <p>
        I also manage{' '}
        <ExternalLink to="https://phorward.org">Phorward</ExternalLink>, a
        nonprofit devoted to creating{' '}
        <span style={{ fontStyle: 'italic' }}>
          Software as a *Public Service
        </span>
        . We build apps, manage data, track analytics, the works - all for
        organizations that make Philly better, all for free. Have a project that
        needs support? Reach out{' '}
        <ExternalLink to="https://phorward.org/contact">here</ExternalLink>.
      </p>
      <p>
        I live in Philadelphia with my partner Liv and our rescue mutt Dennis.
        Come say hi sometime, we like folks (no covid pls).
      </p>
      <p>
        <strong>Things I like:</strong> React, SASS, equitable education,
        pitbulls
      </p>
      <p>
        <strong>Things I dislike:</strong> Servers, "java", pirates
      </p>
    </section>
  )
}

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
        making... well, better.
      </p>
      <p>
        I also manage{' '}
        <ExternalLink to="https://phorward.org">Phorward</ExternalLink>, a
        nonprofit devoted to designing and developing pro bono software for
        nonprofits in Philadelphia. We build apps, manage data, track analytics,
        the works - all for organizations that make Philly better, all for free.
      </p>
      <p>
        I live in Fairmount with my partner Liv and our mutt Dennis. Come say hi
        sometime, we like folks (no covid pls).
      </p>
      <p>
        <strong>Things I like:</strong> React, SASS, equitable education, rescue
        pitbulls
      </p>
      <p>
        <strong>Things I dislike:</strong> Servers, "java", pirates
      </p>
    </section>
  )
}

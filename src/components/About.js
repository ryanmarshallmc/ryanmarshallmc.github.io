import React from 'react'
import { ExternalLink } from '../helpers'
import './About.scss'

export default function About() {
  return (
    <section id="About">
      <h2>my name is ryan (he/him).</h2>
      <p>
        I'm a designer and developer working @{' '}
        <ExternalLink to="https://izotope.com">iZotope</ExternalLink> on the
        Cloud Research team. We use the latest browser tech to make music
        production more collaborative. I also volunteer as a mentor with{' '}
        <ExternalLink to="https://resilientcoders.org">
          Resilient Coders
        </ExternalLink>{' '}
        training the next generation of progressive engineers and change makers
        (go donate money if you can!)
      </p>
      <p>
        I manage <ExternalLink to="https://phorward.org">Phorward</ExternalLink>
        , a nonprofit devoted to Software as a{' '}
        <span style={{ fontStyle: 'italic' }}>*Public </span> Service. We build
        apps, manage data, track analytics, the works - all for nonprofits that
        make Philly better, all for free. Know a project or organization that
        needs support? Reach out{' '}
        <ExternalLink to="https://phorward.org/contact">here</ExternalLink>.
      </p>
      <p>
        I live in Philadelphia with my partner Liv and our rescue pitbull
        Dennis. Come say hi sometime, we love folks (no covid pls).
      </p>
      <p>
        <strong>things I like:</strong> npm, React, SASS, equitable education,
        drums, cities where it's always sunny, wawa
      </p>
      <p>
        <strong>things I dislike:</strong> servers, "java", pirates, sheetz
      </p>
    </section>
  )
}

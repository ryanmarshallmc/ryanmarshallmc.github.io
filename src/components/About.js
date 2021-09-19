import React from 'react'
import { ExternalLink } from '../helpers'
import './About.scss'

export default function About() {
  return (
    <section id="About">
      <h2>my name is ryan (he/him).</h2>
      <p>
        I'm a developer working @{' '}
        <ExternalLink to="https://izotope.com">iZotope</ExternalLink> on the
        Cloud Research team. We use the latest browser tech to make music
        production more accessible and collaborative.
      </p>
      <p>
        I also work as the Director of Technology @{' '}
        <ExternalLink to="https://sharingexcess.com">
          Sharing Excess
        </ExternalLink>{' '}
        in Philadelphia, PA. SE helps redistribute food from wholesale markets,
        grocery stores, and restaurants to local pantries and shelters. We
        manage a network of over 150 local nonprofits and volunteers with a
        serverless stack built on React, Sass, Next.js, and Firebase, and
        deliver over 100,000 lbs. of food every month.
      </p>
      <p>
        As a volunteer, I help mentor early career engineers @{' '}
        <ExternalLink to="https://resilientcoders.org">
          Resilient Coders
        </ExternalLink>
        . RC defines what a coding bootcamp should be - radically free with full
        living stipends, and focused on building the pathway for women and PoC
        to enter the software industry. You should donate! Monthly!
      </p>
      <p>
        I live in Philadelphia with my rescue pitbull Dennis. Come say hi
        sometime.
      </p>
      <p>
        <strong>things I like:</strong> open source, equitable education,
        drumming, cities where it's always sunny
      </p>
      <p>
        <strong>things I dislike:</strong> void pointers, pointer pointers,
        basically any pointers
      </p>
    </section>
  )
}

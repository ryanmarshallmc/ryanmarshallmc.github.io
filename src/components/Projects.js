import React, { useRef } from 'react'
import { ExternalLink, useIsMobile } from '../helpers'
import './Projects.scss'

export default function Projects() {
  const isMobile = useIsMobile()

  const projects = [
    {
      name: 'iZotope Spire',
      description:
        'A completely, completely collaborative cloud based music production platform.',
      link: 'https://share.izotope.com/c/f903f32e-a485-4447-b74d-9c0c60f3180c',
      video: isMobile ? '/spire_mobile.mov' : '/spire_desktop.mov',
      button: 'Check It Out',
    },
    {
      name: 'Sharing Excess',
      description:
        'A real time web application to track drivers rescuing food for nonprofits.',
      link: 'https://sharingexcess.com',
      video: isMobile ? '/se_mobile.mov' : '/se_desktop.mov',
      button: 'Learn More',
    },
    {
      name: 'Phorward',
      description:
        'Philly nonprofit building pro bono software for Philly nonprofits.',
      link: 'https://phorward.org',
      video: isMobile ? '/phorward_mobile.mov' : '/phorward_desktop.mov',
      button: 'Learn More',
    },
  ]

  function Project({ video, name, description, link, button }) {
    const ref = useRef()
    const isMobile = useIsMobile()

    const onMouseMove = e => {
      const height = ref.current.clientHeight
      const width = ref.current.clientWidth
      const rect = e.target.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const rotate_y = 20 * ((x - width / 2) / width)
      const rotate_x = -20 * ((y - height / 2) / height)
      ref.current.style.transform = `perspective(500px) rotateX(${rotate_x}deg) rotateY(${rotate_y}deg)`
    }

    const onMouseOut = () => {
      ref.current.style.transform =
        'perspective(500px) scale(1) rotateX(0) rotateY(0)'
    }
    return (
      <div
        className="Project"
        ref={ref}
        onMouseMove={isMobile ? onMouseMove : null}
        onMouseOut={isMobile ? onMouseOut : null}
      >
        <video autoPlay muted loop src={video} />
        <div className="Info">
          <h3>{name}</h3>
          <p>{description}</p>
          <ExternalLink to={link}>
            <button>{button}</button>
          </ExternalLink>
        </div>
      </div>
    )
  }
  return (
    <section id="Projects">
      <h2>what i'm working on.</h2>
      <div className="Projects">
        {projects.map(i => (
          <Project key={i.name} {...i} />
        ))}
      </div>
    </section>
  )
}

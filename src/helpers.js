import { useEffect, useState } from 'react'

export const hover3d = elementRef => {
  console.log(elementRef)
  return elementRef.current
    ? {
        onMouseMove: e => {
          const height = elementRef.current.clientHeight
          const width = elementRef.current.clientWidth
          const rotate_y = 20 * ((e.clientX - width / 2) / width)
          const rotate_x = -20 * ((e.clientY - height / 2) / height)
          elementRef.current.style.transform = `perspective(500px) rotateX(${rotate_x}deg) rotateY(${rotate_y}deg)`
        },
        onMouseOut: () => {
          elementRef.current.style.transform =
            'perspective(500px) scale(1) rotateX(0) rotateY(0)'
        },
      }
    : {}
}

export function ExternalLink({ to, children }) {
  return (
    <a href={to} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600)

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (!isMobile && window.innerWidth < 600) {
        setIsMobile(true)
      } else if (isMobile && window.innerWidth > 600) {
        setIsMobile(false)
      }
    })
  }, []) // eslint-disable-line

  return isMobile
}

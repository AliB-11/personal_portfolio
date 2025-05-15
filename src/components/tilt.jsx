import React, { useRef, useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'

export default function Tilt({ options = {}, children, className }) {
  const tiltRef = useRef(null)

  useEffect(() => {
    const node = tiltRef.current
    VanillaTilt.init(node, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.3,
      ...options
    })
    return () => node.vanillaTilt.destroy()
  }, [options])

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  )
}
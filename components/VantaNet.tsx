// components/VantaNet.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'

type VantaNetEffect = {
  destroy: () => void
}

export default function VantaNet() {
  const [vantaEffect, setVantaEffect] = useState<VantaNetEffect | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!vantaEffect && ref.current) {
      setVantaEffect(
        NET({
          THREE,                  // pass in THREE
          el: ref.current,        // element to bind to
          color: 0x0fffff,        // line color
          backgroundColor: 0x0,   // dark background
          points: 12.0,
          maxDistance: 25.0,
          spacing: 18.0
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div
      ref={ref}
      className="fixed inset-0 -z-10"
    />
  )
}

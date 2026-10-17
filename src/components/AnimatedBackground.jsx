import { Box } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const containerRef = useRef()

  useEffect(() => {
    // Simple CSS animations instead of GSAP for lighter bundle
    const particles = []
    const container = containerRef.current

    // Create floating particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div')
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: rgba(66, 165, 245, 0.3);
        border-radius: 50%;
        animation: float ${Math.random() * 10 + 10}s infinite linear;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
      `
      container.appendChild(particle)
      particles.push(particle)
    }

    // Add CSS keyframes
    const style = document.createElement('style')
    style.textContent = `
      @keyframes float {
        0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
      }
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `
    document.head.appendChild(style)

    return () => {
      particles.forEach(p => p.remove())
      style.remove()
    }
  }, [])

  return (
    <Box
      ref={containerRef}
      position="fixed"
      top={0}
      left={0}
      w="100%"
      h="100%"
      zIndex={-1}
      background="linear-gradient(-45deg, #1a202c, #2d3748, #4a5568, #2b6cb0)"
      backgroundSize="400% 400%"
      animation="gradient 15s ease infinite"
      _light={{
        background: "linear-gradient(-45deg, #f7fafc, #edf2f7, #e2e8f0, #cbd5e0)",
      }}
    />
  )
}
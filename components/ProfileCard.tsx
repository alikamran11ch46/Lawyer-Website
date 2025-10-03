'use client'

import { useEffect, useRef } from 'react'

interface ProfileCardProps {
  name: string
  title: string
  avatarUrl: string
  enableTilt?: boolean
  enableMobileTilt?: boolean
}

export default function ProfileCard({
  name,
  title,
  avatarUrl,
  enableTilt = true,
  enableMobileTilt = false
}: ProfileCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!enableTilt) return
    if (!enableMobileTilt && window.innerWidth < 768) return

    const card = cardRef.current
    if (!card) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    }

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [enableTilt, enableMobileTilt])

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden rounded-2xl transition-transform duration-200 ease-out"
      style={{
        transformStyle: 'preserve-3d',
        transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        <img
          src={avatarUrl}
          alt={name}
          className="w-full h-full object-cover"
          style={{
            transform: 'translateZ(20px)',
            transformStyle: 'preserve-3d'
          }}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            e.currentTarget.parentElement!.innerHTML = `
              <div class="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <svg class="w-32 h-32 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
              </div>
            `
          }}
        />

      </div>
    </div>
  )
}

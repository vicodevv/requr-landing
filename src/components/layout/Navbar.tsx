'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/requr-logo.svg"
              alt="Requr Logo"
              width={150}
              height={40}
              className="h-7 sm:h-8 md:h-9 lg:h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* CTA Button */}
          <Link href="/join" className="no-underline">
            <button className="text-white text-xs sm:text-sm font-medium hover:opacity-80 transition-opacity px-3 py-2 sm:px-4 sm:py-2 md:px-0 md:py-0 rounded-md sm:rounded-none bg-white/10 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none">
              <span className="hidden sm:inline">Join our waitlist</span>
              <span className="sm:hidden">Join waitlist</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
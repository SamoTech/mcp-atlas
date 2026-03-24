'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const isDark = stored ? stored === 'dark' : true
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.classList.toggle('light', !isDark)
  }, [])

  function toggle() {
    const next = !dark
    setDark(next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', next)
    document.documentElement.classList.toggle('light', !next)
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="flex items-center justify-center w-8 h-8 rounded-lg border border-navy-700 text-navy-400 hover:border-cyan-600 hover:text-cyan-400 transition text-sm"
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {dark ? '🌞' : '🌙'}
    </button>
  )
}

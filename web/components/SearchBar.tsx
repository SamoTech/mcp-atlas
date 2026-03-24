'use client'
import { useState } from 'react'

interface Props {
  onSearch: (query: string) => void
  placeholder?: string
}

export default function SearchBar({ onSearch, placeholder = 'Search...' }: Props) {
  const [value, setValue] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <div className="relative w-full max-w-xl">
      <input
        type="search"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-navy-600 bg-navy-800 px-4 py-2.5 pr-10 text-white placeholder-navy-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 text-sm"
      />
      <svg
        className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-navy-400"
        fill="none" viewBox="0 0 24 24" stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
      </svg>
    </div>
  )
}

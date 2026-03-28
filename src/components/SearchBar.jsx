import { useState, useRef, useEffect } from 'react'

const CATEGORIES = [
    { label: '🏔️ Nature', query: 'nature landscape' },
    { label: '🐾 Animals', query: 'animals wildlife' },
    { label: '💻 Technology', query: 'technology digital' },
    { label: '🍕 Food', query: 'food cooking' },
    { label: '🏙️ Architecture', query: 'architecture buildings' },
    { label: '🎨 Art', query: 'art painting' },
    { label: '✈️ Travel', query: 'travel adventure' },
    { label: '🌸 Flowers', query: 'flowers garden' },
]

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('')
    const [isFocused, setIsFocused] = useState(false)
    const inputRef = useRef(null)

    // Auto-focus the search bar on mount
    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (query.trim()) {
            onSearch(query.trim())
        }
    }

    const handleCategoryClick = (categoryQuery) => {
        setQuery(categoryQuery)
        onSearch(categoryQuery)
    }

    return (
        <div className="w-full animate-fade-in-up">
            {/* Search form */}
            <form onSubmit={handleSubmit} className="relative mx-auto max-w-2xl">
                <div
                    className={`
            relative flex items-center rounded-2xl transition-all duration-300
            ${isFocused ? 'animate-pulse-glow ring-2 ring-accent-500/50' : ''}
          `}
                >
                    {/* Search icon */}
                    <div className="pointer-events-none absolute left-4 text-dark-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <input
                        ref={inputRef}
                        id="search-input"
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder="Search for stunning images..."
                        className="
              w-full rounded-2xl border border-dark-600 bg-dark-800 py-4 pl-12 pr-28
              text-dark-100 placeholder-dark-400
              transition-colors duration-200
              focus:border-accent-500 focus:outline-none
            "
                    />

                    <button
                        type="submit"
                        id="search-button"
                        className="
              absolute right-2 rounded-xl bg-gradient-to-r from-accent-600 to-accent-500
              px-6 py-2.5 text-sm font-semibold text-white
              transition-all duration-200
              hover:from-accent-500 hover:to-accent-400 hover:shadow-lg hover:shadow-accent-500/25
              active:scale-95
              cursor-pointer
            "
                    >
                        Search
                    </button>
                </div>
            </form>

            {/* Category chips */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat.query}
                        onClick={() => handleCategoryClick(cat.query)}
                        className="
              glass-light rounded-full px-4 py-1.5 text-xs font-medium text-dark-200
              transition-all duration-200
              hover:border-accent-500/30 hover:text-accent-300 hover:bg-accent-500/10
              active:scale-95 cursor-pointer
            "
                    >
                        {cat.label}
                    </button>
                ))}
            </div>
        </div>
    )
}

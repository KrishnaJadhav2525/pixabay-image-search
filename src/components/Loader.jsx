export default function Loader() {
    return (
        <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
            {/* Animated spinner */}
            <div className="relative h-12 w-12">
                <div className="absolute inset-0 rounded-full border-2 border-dark-600" />
                <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-accent-500" />
            </div>
            <p className="mt-4 text-sm text-dark-400">Loading images...</p>

            {/* Skeleton cards */}
            <div className="mt-8 grid w-full max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                        key={i}
                        className="h-48 rounded-xl bg-dark-800 animate-shimmer"
                        style={{
                            backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.05) 50%, transparent 100%)',
                            backgroundSize: '200% 100%',
                            animationDelay: `${i * 100}ms`,
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

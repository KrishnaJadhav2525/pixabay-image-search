export default function ImageCard({ image, onClick, index }) {
    return (
        <div
            className="group relative mb-4 cursor-pointer overflow-hidden rounded-xl break-inside-avoid animate-fade-in"
            style={{ animationDelay: `${(index % 20) * 50}ms` }}
            onClick={() => onClick(image)}
        >
            {/* Image */}
            <img
                src={image.webformatURL}
                alt={image.tags}
                loading="lazy"
                className="block w-full rounded-xl transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hover overlay — glassmorphism */}
            <div
                className="
          absolute inset-0 flex flex-col justify-end rounded-xl
          bg-gradient-to-t from-black/70 via-black/20 to-transparent
          p-4 opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        "
            >
                {/* Photographer */}
                <div className="flex items-center gap-2 mb-2">
                    {image.userImageURL ? (
                        <img
                            src={image.userImageURL}
                            alt={image.user}
                            className="h-7 w-7 rounded-full border border-white/20 object-cover"
                        />
                    ) : (
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-500/30 text-xs font-bold text-white">
                            {image.user?.charAt(0).toUpperCase()}
                        </div>
                    )}
                    <span className="text-sm font-medium text-white/90">{image.user}</span>
                </div>

                {/* Stats row */}
                <div className="flex items-center gap-4 text-xs text-white/70">
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        {formatNumber(image.likes)}
                    </span>
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {formatNumber(image.views)}
                    </span>
                    <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {formatNumber(image.downloads)}
                    </span>
                </div>
            </div>
        </div>
    )
}

function formatNumber(num) {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + 'M'
    if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K'
    return num.toString()
}

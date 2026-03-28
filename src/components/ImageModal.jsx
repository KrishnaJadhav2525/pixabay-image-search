import { useEffect } from 'react'

export default function ImageModal({ image, onClose }) {
    // Close on Escape key
    useEffect(() => {
        const handler = (e) => {
            if (e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handler)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', handler)
            document.body.style.overflow = ''
        }
    }, [onClose])

    if (!image) return null

    return (
        <div
            id="image-modal-overlay"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

            {/* Modal content */}
            <div
                className="
          relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden
          rounded-2xl glass animate-scale-in
          lg:flex-row
        "
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    id="modal-close-button"
                    onClick={onClose}
                    className="
            absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center
            rounded-full bg-black/40 text-white/70
            transition-colors hover:bg-black/60 hover:text-white
            cursor-pointer
          "
                    aria-label="Close modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Image */}
                <div className="flex flex-1 items-center justify-center bg-dark-950/50 p-2 lg:p-4">
                    <img
                        src={image.largeImageURL}
                        alt={image.tags}
                        className="max-h-[50vh] w-full rounded-xl object-contain lg:max-h-[80vh]"
                    />
                </div>

                {/* Details sidebar */}
                <div className="flex w-full flex-col gap-5 p-6 lg:w-80 lg:overflow-y-auto">
                    {/* Photographer */}
                    <div className="flex items-center gap-3">
                        {image.userImageURL ? (
                            <img src={image.userImageURL} alt={image.user} className="h-10 w-10 rounded-full border border-dark-600 object-cover" />
                        ) : (
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-500/20 font-bold text-accent-400">
                                {image.user?.charAt(0).toUpperCase()}
                            </div>
                        )}
                        <div>
                            <p className="text-sm font-semibold text-dark-100">{image.user}</p>
                            <p className="text-xs text-dark-400">Photographer</p>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                        {image.tags?.split(', ').map((tag) => (
                            <span key={tag} className="rounded-full bg-dark-700 px-2.5 py-1 text-xs text-dark-300">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-3">
                        <StatBox icon="❤️" label="Likes" value={image.likes} />
                        <StatBox icon="👁️" label="Views" value={image.views} />
                        <StatBox icon="⬇️" label="Downloads" value={image.downloads} />
                        <StatBox icon="💬" label="Comments" value={image.comments} />
                    </div>

                    {/* Resolution */}
                    <div className="rounded-xl bg-dark-800 p-3">
                        <p className="text-xs text-dark-400 mb-1">Resolution</p>
                        <p className="text-sm font-semibold text-dark-100">
                            {image.imageWidth} × {image.imageHeight}
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 mt-auto">
                        <a
                            href={image.pageURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            id="view-on-pixabay"
                            className="
                flex-1 rounded-xl bg-gradient-to-r from-accent-600 to-accent-500
                py-2.5 text-center text-sm font-semibold text-white
                transition-all hover:from-accent-500 hover:to-accent-400
              "
                        >
                            View on Pixabay
                        </a>
                        <a
                            href={image.largeImageURL}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            id="download-image"
                            className="
                flex items-center justify-center rounded-xl bg-dark-700
                px-4 py-2.5 text-dark-200
                transition-colors hover:bg-dark-600
              "
                            aria-label="Download image"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function StatBox({ icon, label, value }) {
    return (
        <div className="rounded-xl bg-dark-800 p-3 text-center">
            <p className="text-base">{icon}</p>
            <p className="text-sm font-bold text-dark-100">{value?.toLocaleString()}</p>
            <p className="text-xs text-dark-400">{label}</p>
        </div>
    )
}

import ImageCard from './ImageCard'

export default function ImageGrid({ images, onImageClick, loading, hasMore, onLoadMore, totalHits }) {
    return (
        <div className="animate-fade-in">
            {/* Results count */}
            {totalHits > 0 && (
                <p className="mb-6 text-sm text-dark-400">
                    Showing <span className="font-semibold text-dark-200">{images.length}</span> of{' '}
                    <span className="font-semibold text-dark-200">{totalHits.toLocaleString()}</span> results
                </p>
            )}

            {/* Masonry grid via CSS columns */}
            <div
                className="
          columns-1 gap-4
          sm:columns-2
          lg:columns-3
          xl:columns-4
        "
            >
                {images.map((image, index) => (
                    <ImageCard
                        key={`${image.id}-${index}`}
                        image={image}
                        onClick={onImageClick}
                        index={index}
                    />
                ))}
            </div>

            {/* Load More button */}
            {hasMore && !loading && (
                <div className="mt-10 flex justify-center">
                    <button
                        id="load-more-button"
                        onClick={onLoadMore}
                        className="
              group relative overflow-hidden rounded-xl
              bg-dark-700 px-8 py-3 font-semibold text-dark-100
              transition-all duration-300
              hover:bg-dark-600 hover:shadow-lg hover:shadow-accent-500/10
              active:scale-95 cursor-pointer
            "
                    >
                        <span className="relative z-10">Load More Images</span>
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-accent-500/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                    </button>
                </div>
            )}
        </div>
    )
}

import ImageCard from './ImageCard'

export default function ImageGrid({ images, onImageClick, totalHits }) {
  return (
    <div className="animate-fade-in">
      {totalHits > 0 && (
        <p className="mb-6 text-sm text-dark-400">
          Showing <span className="font-semibold text-dark-200">{images.length}</span> of{' '}
          <span className="font-semibold text-dark-200">{totalHits.toLocaleString()}</span> results
        </p>
      )}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {images.map((image, index) => (
          <ImageCard key={`${image.id}-${index}`} image={image} onClick={onImageClick} index={index} />
        ))}
      </div>
    </div>
  )
}

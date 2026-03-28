import ImageCard from './ImageCard'

export default function ImageGrid({ images, onImageClick }) {
  return (
    <div className="animate-fade-in">
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {images.map((image, index) => (
          <ImageCard key={`${image.id}-${index}`} image={image} onClick={onImageClick} index={index} />
        ))}
      </div>
    </div>
  )
}

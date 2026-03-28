export default function ImageCard({ image, onClick, index }) {
  return (
    <div
      className="group relative mb-4 cursor-pointer overflow-hidden rounded-xl break-inside-avoid animate-fade-in"
      style={{ animationDelay: `${(index % 20) * 50}ms` }}
      onClick={() => onClick(image)}
    >
      <img src={image.webformatURL} alt={image.tags} loading="lazy"
        className="block w-full rounded-xl transition-transform duration-500 group-hover:scale-105" />
    </div>
  )
}

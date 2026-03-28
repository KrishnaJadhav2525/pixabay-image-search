export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-16 animate-fade-in">
      <div className="relative h-12 w-12">
        <div className="absolute inset-0 rounded-full border-2 border-dark-600" />
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-accent-500" />
      </div>
      <p className="mt-4 text-sm text-dark-400">Loading images...</p>
    </div>
  )
}

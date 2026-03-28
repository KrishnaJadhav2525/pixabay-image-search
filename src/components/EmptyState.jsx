export default function EmptyState({ type = 'initial', query = '' }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 animate-fade-in-up">
      <div className="mb-4 text-6xl">📸</div>
      <h2 className="mb-2 text-xl font-semibold text-dark-100">Discover stunning images</h2>
      <p className="max-w-md text-center text-sm text-dark-400">
        Search from millions of free high-quality photos on Pixabay.
        Start typing above or pick a category to explore.
      </p>
    </div>
  )
}

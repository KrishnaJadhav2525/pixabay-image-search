import { useState } from 'react'
import { usePixabay } from './hooks/usePixabay'
import SearchBar from './components/SearchBar'
import ImageGrid from './components/ImageGrid'
import ImageModal from './components/ImageModal'
import Loader from './components/Loader'
import EmptyState from './components/EmptyState'

function App() {
  const { images, loading, error, totalHits, hasMore, search, loadMore } = usePixabay()
  const [selectedImage, setSelectedImage] = useState(null)
  const [hasSearched, setHasSearched] = useState(false)
  const [currentQuery, setCurrentQuery] = useState('')

  const handleSearch = (query) => {
    setCurrentQuery(query)
    setHasSearched(true)
    search(query)
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="glass sticky top-0 z-40 border-b border-dark-700/50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold">
            <span className="bg-gradient-to-r from-accent-400 to-pink-500 bg-clip-text text-transparent">Pixa</span>
            <span className="text-dark-100">Search</span>
          </h1>
          <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer" className="text-xs text-dark-400 transition-colors hover:text-accent-400">Powered by Pixabay</a>
        </div>
      </header>

      <section className="mx-auto w-full max-w-3xl px-6 pt-16 pb-10 text-center">
        <h2 className="mb-3 text-4xl font-extrabold tracking-tight text-dark-100 animate-fade-in sm:text-5xl">
          Discover <span className="bg-gradient-to-r from-accent-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">Stunning</span> Images
        </h2>
        <p className="mb-8 text-dark-400 animate-fade-in">Search millions of free, high-quality photos from Pixabay</p>
        <SearchBar onSearch={handleSearch} />
      </section>

      <main className="mx-auto w-full max-w-7xl flex-1 px-6 pb-16">
        {error && <EmptyState type="error" query={error} />}
        {loading && images.length === 0 && <Loader />}
        {hasSearched && !loading && !error && images.length === 0 && <EmptyState type="no-results" query={currentQuery} />}
        {!hasSearched && !loading && !error && <EmptyState type="initial" />}
        {images.length > 0 && <ImageGrid images={images} onImageClick={setSelectedImage} loading={loading} hasMore={hasMore} onLoadMore={loadMore} totalHits={totalHits} />}
        {loading && images.length > 0 && (
          <div className="mt-8 flex justify-center"><div className="h-8 w-8 animate-spin rounded-full border-2 border-dark-600 border-t-accent-500" /></div>
        )}
      </main>

      <footer className="border-t border-dark-700/50 py-6 text-center text-xs text-dark-500">
        <p>Built with React + Vite + Tailwind CSS &bull; <a href="https://pixabay.com/api/docs/" target="_blank" rel="noopener noreferrer" className="text-accent-400/70 hover:text-accent-400">Pixabay API</a></p>
      </footer>

      {selectedImage && <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </div>
  )
}

export default App

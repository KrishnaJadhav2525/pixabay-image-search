import { useState, useCallback, useRef } from 'react'

const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY
const BASE_URL = 'https://pixabay.com/api/'
const PER_PAGE = 20

export function usePixabay() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [totalHits, setTotalHits] = useState(0)
  const pageRef = useRef(1)
  const queryRef = useRef('')

  const fetchImages = useCallback(async (query, page = 1) => {
    if (!API_KEY) {
      setError('Pixabay API key is missing. Add VITE_PIXABAY_API_KEY to your .env file.')
      return
    }
    setLoading(true)
    setError(null)
    try {
      const params = new URLSearchParams({
        key: API_KEY, q: query, page: page.toString(),
        per_page: PER_PAGE.toString(), image_type: 'photo', safesearch: 'true',
      })
      const response = await fetch(BASE_URL + '?' + params)
      if (!response.ok) throw new Error('Pixabay API error: ' + response.status)
      const data = await response.json()
      setTotalHits(data.totalHits)
      setImages(data.hits)
    } catch (err) {
      setError(err.message || 'Something went wrong fetching images.')
    } finally {
      setLoading(false)
    }
  }, [])

  const search = useCallback((query) => {
    const trimmed = query.trim()
    if (!trimmed) return
    queryRef.current = trimmed
    pageRef.current = 1
    fetchImages(trimmed, 1)
  }, [fetchImages])

  const hasMore = images.length < totalHits
  return { images, loading, error, totalHits, hasMore, search }
}

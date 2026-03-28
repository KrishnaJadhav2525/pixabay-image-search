import { useState, useCallback, useRef, useEffect } from 'react'

const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY
const BASE_URL = 'https://pixabay.com/api/'
const PER_PAGE = 20

/**
 * Custom hook for fetching images from the Pixabay API.
 * Handles search, pagination ("Load More"), loading, and error states.
 *
 * Think of it like a librarian — you tell it what to search for,
 * and it goes to Pixabay's catalog, brings back the images,
 * and keeps track of which "page" you're on.
 */
export function usePixabay() {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [totalHits, setTotalHits] = useState(0)
    const pageRef = useRef(1)
    const queryRef = useRef('')
    const isTrendingRef = useRef(true)

    const fetchImages = useCallback(async (query, page = 1, append = false, options = {}) => {
        if (!API_KEY) {
            setError('Pixabay API key is missing. Add VITE_PIXABAY_API_KEY to your .env file.')
            return
        }

        setLoading(true)
        setError(null)

        try {
            const params = new URLSearchParams({
                key: API_KEY,
                page: page.toString(),
                per_page: PER_PAGE.toString(),
                image_type: 'photo',
                safesearch: 'true',
            })

            // Add editors_choice for trending feed
            if (options.editorsChoice) {
                params.set('editors_choice', 'true')
                params.set('order', 'popular')
            }

            // Only add query if there's a search term
            if (query) {
                params.set('q', query)
            }

            const response = await fetch(`${BASE_URL}?${params}`)

            if (!response.ok) {
                throw new Error(`Pixabay API error: ${response.status} ${response.statusText}`)
            }

            const data = await response.json()
            setTotalHits(data.totalHits)
            setImages((prev) => (append ? [...prev, ...data.hits] : data.hits))
        } catch (err) {
            setError(err.message || 'Something went wrong fetching images.')
        } finally {
            setLoading(false)
        }
    }, [])

    // Load trending/popular images automatically when the page first opens
    useEffect(() => {
        fetchImages('', 1, false, { editorsChoice: true })
    }, [fetchImages])

    /** Run a brand-new search (resets to page 1) */
    const search = useCallback(
        (query) => {
            const trimmed = query.trim()
            if (!trimmed) return
            queryRef.current = trimmed
            pageRef.current = 1
            isTrendingRef.current = false
            fetchImages(trimmed, 1, false)
        },
        [fetchImages],
    )

    /** Load the next page and append results */
    const loadMore = useCallback(() => {
        pageRef.current += 1
        if (isTrendingRef.current) {
            fetchImages('', pageRef.current, true, { editorsChoice: true })
        } else {
            fetchImages(queryRef.current, pageRef.current, true)
        }
    }, [fetchImages])

    const hasMore = images.length < totalHits

    return { images, loading, error, totalHits, hasMore, search, loadMore }
}

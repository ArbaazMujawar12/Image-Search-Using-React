import { useState } from 'react';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
const BASE_URL = "https://api.pexels.com/v1";

export default function useImageSearch() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  const searchImages = async (query) => {
    if (!query.trim()) return;

    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get(`${BASE_URL}/search`, {
        params: { query, per_page: 12, page: 1 },
        headers: { Authorization: API_KEY }
      });

      setImages(response.data.photos);
      setTotalResults(response.data.total_results);
      setHasMore(response.data.photos.length === 12 && response.data.photos.length < response.data.total_results);
      setPage(2);
    } catch (err) {
      setError(err);
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreImages = async (query) => {
    if (!query.trim()) return;

    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/search`, {
        params: { query, per_page: 12, page },
        headers: { Authorization: API_KEY }
      });

      setImages(prev => [...prev, ...response.data.photos]);
      setHasMore(response.data.photos.length === 12 && images.length + response.data.photos.length < totalResults);
      setPage(prev => prev + 1);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const resetSearch = () => {
    setImages([]);
    setPage(1);
    setHasMore(false);
    setTotalResults(0);
  };

  return { images, loading, error, hasMore, searchImages, loadMoreImages, resetSearch };
}
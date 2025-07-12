import { useState } from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import useImageSearch from './hooks/useImageSearch';
import SearchBar from './components/SearchBar';
import CategoryButtons from './components/CategoryButtons';
import ImageCard from './components/ImageCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const { images, loading, error, hasMore, searchImages, loadMoreImages, resetSearch } = useImageSearch();

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);
    resetSearch();
    searchImages(searchTerm);
  };

  const handleCategoryClick = (category) => {
    setQuery(category);
    resetSearch();
    searchImages(category);
  };

  return (
    <div className="app-container">
      <div className="hero-section">
        <Container>
          <h1 className="hero-title">Your Ultimate Image Search Tool</h1>
          <p className="hero-subtitle">Find the perfect images in just a few clicks!</p>
          
          <SearchBar 
            onSearch={handleSearch} 
            initialQuery={query}
          />
          
          <CategoryButtons 
            categories={['Nature', 'Technology', 'Art', 'Cities']} 
            onCategoryClick={handleCategoryClick}
          />
        </Container>
      </div>

      <Container className="results-container">
        {error && (
          <Alert variant="danger" className="mt-4">
            Error: {error.message}
          </Alert>
        )}

        {!loading && images.length === 0 && query && (
          <Alert variant="info" className="mt-4">
            No images found for "{query}". Try a different search term.
          </Alert>
        )}

        <Row className="g-4">
          {images.map((image) => (
            <Col key={image.id} xs={12} sm={6} md={4} lg={3}>
              <ImageCard image={image} />
            </Col>
          ))}
        </Row>

        {loading && (
          <div className="text-center my-4">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}

        {hasMore && !loading && (
          <div className="text-center my-4">
            <button 
              onClick={() => loadMoreImages(query)}
              className="btn btn-primary load-more-btn"
            >
              Show More
            </button>
          </div>
        )}
      </Container>

      <Footer />
    </div>
  );
}

export default App;
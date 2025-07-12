import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export default function ImageCard({ image }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img 
        variant="top" 
        src={image.src.medium} 
        alt={image.alt || 'Pexels image'}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title className="text-truncate">
          {image.alt || 'No description'}
        </Card.Title>
        <Card.Text className="text-muted small">
          Photographer: {image.photographer}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="bg-white">
        <a href={image.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary w-100">
          <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" />
          View on Pexels
        </a>
      </Card.Footer>
    </Card>
  );
}
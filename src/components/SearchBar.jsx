import { Form, InputGroup, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function SearchBar({ onSearch, initialQuery = '' }) {
  const [query, setQuery] = useState(initialQuery);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Search for images..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="py-2"
        />
        <Button variant="primary" type="submit" className="px-4">
          Search
        </Button>
      </InputGroup>
    </Form>
  );
}
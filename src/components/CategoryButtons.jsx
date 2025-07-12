import { Button } from 'react-bootstrap';

export default function CategoryButtons({ categories, onCategoryClick }) {
  return (
    <div className="d-flex flex-wrap gap-2 mb-4">
      {categories.map((category) => (
        <Button
          key={category}
          variant="outline-primary"
          onClick={() => onCategoryClick(category)}
          className="rounded-pill"
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
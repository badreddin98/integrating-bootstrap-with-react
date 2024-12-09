import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Simple 404 page
function NotFound() {
  return (
    <Container className="text-center mt-5">
      <h1 className="text-primary">404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, we couldn't find the page you're looking for.</p>
      <Button as={Link} to="/" variant="primary">
        Go Back Home
      </Button>
    </Container>
  );
}

export default NotFound;

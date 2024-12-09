import { Button, Card, Container, Row, Col } from 'react-bootstrap';

// Simple homepage component with basic Bootstrap elements
function HomePage() {
  return (
    <div className="bg-light">
      {/* Welcome section */}
      <div className="text-center py-4 bg-primary text-white">
        <h1>Welcome to My Store</h1>
        <p>Find great products here!</p>
        <Button variant="light">Shop Now</Button>
      </div>

      {/* Products section */}
      <Container className="py-4">
        <h2 className="text-center mb-4">Our Products</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Product 1</Card.Title>
                <Card.Text>
                  This is a cool product that you might like.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Product 2</Card.Title>
                <Card.Text>
                  Another awesome product for you.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Product 3</Card.Title>
                <Card.Text>
                  You'll love this product too!
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;

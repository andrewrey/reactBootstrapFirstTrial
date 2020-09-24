import React from "react";
import { Container, container, ListGroup, ListGroupItem } from "react-bootstrap";

const Results = () => {
  return (
    <Container>
      <h2>Results List</h2>
      <ListGroup>
        <ListGroup.Item>No style</ListGroup.Item>
        <ListGroup.Item variant="primary">Primary</ListGroup.Item>
        <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
        <ListGroup.Item variant="success">Success</ListGroup.Item>
        <ListGroup.Item variant="danger">Danger</ListGroup.Item>
        <ListGroup.Item variant="warning">Warning</ListGroup.Item>
        <ListGroup.Item variant="info">Info</ListGroup.Item>
        <ListGroup.Item variant="light">Light</ListGroup.Item>
        <ListGroup.Item variant="dark">Dark</ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default Results;

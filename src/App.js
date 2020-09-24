import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";

function App() {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1>Learning React Bootstrap</h1>
          <p>This is my attempt at learning React Bootstrap</p>
          <SearchForm />
        </Container>
      </Jumbotron>
      <Results />
    </div>
  );
}

export default App;

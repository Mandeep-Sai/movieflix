import { Button, Container, Form, Navbar } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import "./Navigation.css";

const Navigation = (): JSX.Element => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">WOOKIE MOVIES</Navbar.Brand>
          <Form className="d-flex">
            <Button variant="outline-light" className="search_button">
              <Search />
            </Button>
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </Form>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;

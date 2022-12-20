import { useState } from "react";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import "./Navigation.css";

const Navigation = (): JSX.Element => {
  const [keyword, setkeyword] = useState<string>("");
  let navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setkeyword(e.target.value);
  };

  const searchMovies = (keyword: string) => {
    if (keyword.length > 0) {
      let path = `search/${keyword}`;
      navigate(path);
    }
  };

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">WOOKIE MOVIES</Navbar.Brand>
          <Form className="d-flex">
            <Button
              variant="outline-light"
              className="search_button"
              onClick={() => searchMovies(keyword)}
            >
              <Search />
            </Button>
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => handleSearch(e as any)}
            />
          </Form>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;

import "./SearchBox.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SearchBoxActions from "../../store/SearchBoxSlice";
import { fetchData } from "../../store/action";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const SearchBox = (props) => {
  const dispatch = useDispatch();
  const [searchBoxValue, setSearchBoxValue] = useState("");

  const searchBoxChangeHandler = (event) => {
    setSearchBoxValue(event.target.value);
    props.changeStateHandler(searchBoxValue);
  };

  const btnClickHandler = (event) => {
    event.preventDefault();
    dispatch(fetchData({ searchContent: searchBoxValue, page: 1 }));
  };

  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Control
                className="card-search-box mt-3"
                type="text"
                placeholder="Search... "
                value={searchBoxValue}
                onChange={searchBoxChangeHandler}
              />
            </Form.Group>
          </Col>
          <Col>
            <Button
              className="mt-3"
              onClick={btnClickHandler}
              type="submit"
              variant="outline-primary"
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
    // <input
    //   className="card-search-box"
    //   placeholder="type your movie name..."
    //   value={searchBoxValue}
    //   onChange={searchBoxChangeHandler}
    //   type="text"
    // />
  );
};

export default SearchBox;

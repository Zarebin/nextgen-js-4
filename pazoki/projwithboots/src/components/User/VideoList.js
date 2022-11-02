import { useDispatch } from "react-redux";
import { searchBoxActions } from "../../store/SearchBoxSlice";
import "./VideoList.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const VideoList = (props) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(searchBoxActions.showSelectedMovie(props.idVideo));
  };

  return (
    <Card onClick={clickHandler} className="mb-3">
      <Card.Header>{props.fulldom}</Card.Header>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Container className="justify-content-end">
          <Row>
            <Col>
              <Card.Text>{props.description}</Card.Text>
            </Col>
            <Col>
              <Card.Img variant="top" src={props.cover} id="img-nail" />
            </Col>
          </Row>
        </Container>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default VideoList;

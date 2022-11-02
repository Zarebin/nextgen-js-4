import SearchBox from "./SearchBox";
import "./Home.css";
import VideoList from "./VideoList";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { fetchData } from "../../store/action";
import { useDispatch } from "react-redux";

const Home = () => {
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const moviesList = useSelector((state) => state.search.movieList);
  const movie = useSelector((state) => state.search.movie);

  const moviee = movie.length > 0 ? movie[0] : movie;
  console.log(movie);

  const changeStateHandler = (input) => {
    setQ(input);
  };

  const changePageHandler = (event) => {
    event.preventDefault();
    page += 1;
    setPage(page);
    const data = {
      searchContent: q,
      page: page,
    };
    dispatch(fetchData(data));
  };

  return (
    <Container>
      <Row>
        <Col>
          <SearchBox onChangeState={changeStateHandler} />
        </Col>
      </Row>
      <Row>
        <Col>
          {moviesList.map((item) => (
            <VideoList
              key={item.full_domain}
              idVideo={item.full_domain}
              title={item.title}
              cover={item.thumbnail}
              description={item.description}
              fulldom={item.full_domain}
              icon={item.favicon}
            />
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            id="btnAdd"
            onClick={changePageHandler}
            variant="primary"
            size="lg"
          >
            More results
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;

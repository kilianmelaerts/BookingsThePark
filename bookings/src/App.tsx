import { FC, useEffect, useState } from "react";
import "./App.css";
import "./components/Content.css"
import "./components/Header.css"
import {
  Container,
  Row,
  Col,
  Table,
  FormCheck,
  Button,
  Modal,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Content from "./components/Content";
import { useAxios } from "./hooks/useAxios";
import { useFunctions } from "./hooks/useFunctions";
const App: FC = () => {
  const [data, error, loading, getData, postData, deleteData, updateData] =
    useAxios();
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [company, setCompany] = useState<string>();
  const [date, setDate] = useState<string>();
  const [players, setPlayers] = useState<number>();
  const [privateNumber, setPrivate] = useState<number>(0);
  const [room, setRoom] = useState<number>();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState<string>("");

  const [filteredData, setFilteredData] = useState<any>(null);
  const [allFilter, futureFilter, pastFilter, searchFilter, dateFilter] =
    useFunctions();

  useEffect(() => {
    getData();
  }, []);

  const showModal = () => {
    setShow(true);
  };

  const post = () => {
    const body = {
      name: name,
      email: email,
      company: company,
      date: date,
      players: players,
      private: privateNumber,
      room: room,
    };

    setPrivate(0);

    postData(body);
    setShow(false);
  };

  return (
    <div className="App">
      <Container fluid>
        <Header></Header>
        <div className="filters">
          <Row xs={3} className="mt-4 ms-4 ps-2 pt-2 justify-content-center">
            <Col sm="2" className="">
              <button
                onClick={() => {
                  showModal();
                }}
                className="addButton"
              >
                New Booking
              </button>
            </Col>
            <Col sm="3" className="offset-1">
              <div className="dates">
                <input
                  className="filterInput"
                  type="date"
                  onChange={(e) =>
                    dateFilter(setFilteredData, data, e.target.value)
                  }
                />
                <button
                  className="filterBttn"
                  onClick={() => pastFilter(setFilteredData, data)}
                >
                  past
                </button>
                <button
                  className="filterBttn"
                  onClick={() => futureFilter(setFilteredData, data)}
                >
                  future
                </button>
                <button
                  className="filterBttn"
                  onClick={() => allFilter(setFilteredData, data)}
                >
                  all
                </button>
              </div>
            </Col>
            <Col sm="3">
              <div className="search">
                <input
                  type="search"
                  name=""
                  id=""
                  className="filterInput"
                  placeholder="type to search booking"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  className="searchBttn"
                  onClick={() => searchFilter(setFilteredData, data, search)}
                >
                  search
                </button>
              </div>
            </Col>
          </Row>
        </div>
        {filteredData ? (
          <>
            <Content
              data={filteredData}
              delete={deleteData}
              update={updateData}
              setData={setFilteredData}
            ></Content>
          </>
        ) : (
          <>
            <Content
              data={data}
              delete={deleteData}
              update={updateData}
              setData={getData}
            ></Content>
          </>
        )}
      </Container>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Row xs={1}>
              <Col>You're about to add a booking</Col>
            </Row>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row xs={1} className="justify-content-center">
            <Col>
              <Row className="mt-3">
                <Col xs={4} className="text-end">
                  <label htmlFor="name">name: </label>
                </Col>
                <Col>
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={4} className="text-end">
                  <label htmlFor="email">email: </label>
                </Col>
                <Col>
                  <input
                    type="text"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={4} className="text-end">
                  <label htmlFor="company">company: </label>
                </Col>
                <Col>
                  <input
                    type="text"
                    name="company"
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={4} className="text-end">
                  <label htmlFor="date">date: </label>
                </Col>
                <Col>
                  <input
                    type="date"
                    name="date"
                    onChange={(e) => setDate(e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={4} className="text-end">
                  <label htmlFor="players">players: </label>
                </Col>
                <Col>
                  <input
                    type="number"
                    name="players"
                    min={2}
                    max={100}
                    onChange={(e) => setPlayers(Number(e.target.value))}
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={4} className="text-end">
                  <label htmlFor="private">private: </label>
                </Col>
                <Col>
                  {privateNumber === 0 ? (
                    <>
                      <input type="checkbox" onClick={() => setPrivate(1)} />
                    </>
                  ) : (
                    <>
                      <input type="checkbox" onClick={() => setPrivate(0)} />
                    </>
                  )}
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={4} className="text-end">
                  <label htmlFor="room">room: </label>
                </Col>
                <Col xs={8}>
                  <input
                    type="number"
                    name="room"
                    min={1}
                    max={2}
                    onChange={(e) => setRoom(Number(e.target.value))}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => post()}>
            Add booking
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;

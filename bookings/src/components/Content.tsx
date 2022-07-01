import { FC, useEffect, useState } from "react";
import { Row, Col, Table, FormCheck, Button, Modal } from "react-bootstrap";
import {AiOutlineCheckCircle} from "react-icons/ai";

const Content: FC<{ data: any; update: any; delete: any, setData: any}> = (props) => {
  const [data, setData] = useState(props.data);
  const [showUpdate, setShowUpdate] = useState(false);
  const [updateId, setUpdateId] = useState();
  const [updateName, setUpdateName] = useState("");

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [company, setCompany] = useState<string>();
  const [date, setDate] = useState<string>();
  const [players, setPlayers] = useState<number>();
  const [privateNumber, setPrivate] = useState<number>(0);
  const [room, setRoom] = useState<number>();

  useEffect(() => {
    if (props.data) {
      setData(props.data);

      props.data.forEach((element: any) => {
        var b = document.getElementById("extraTR" + element.id)!;
        if (b !== null) {
          b.style.setProperty("display", "none");
        }
        console.log(b);
      });
    }
  }, [props.data]);

  const hide = (id: any) => {
    var x = document.getElementById(id)!;
    var b = document.getElementById("extraTR" + id)!;
    console.log(window.getComputedStyle(x).visibility);

    if (window.getComputedStyle(x).visibility === "hidden") {
      x.style.setProperty("visibility", "visible");
      x.style.setProperty("height", "auto");
      b.style.removeProperty("display");
    } else {
      x.style.setProperty("visibility", "hidden");
      x.style.setProperty("height", "0px");
      b.style.setProperty("display", "none");
    }
  };

  const formatDate = (date: string) => {
    const newDate = new Date(date).toLocaleDateString("nl-BE", {
      weekday: "short",
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });

    return newDate.charAt(0).toUpperCase() + newDate.slice(1);
  };

  const showUpdateModal = (id: any, name: string) => {
    setUpdateId(id);
    setUpdateName(name);
    setShowUpdate(true);
  };

  const update = () => {
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

    props.update(updateId, body);
    setShowUpdate(false);
  };

  return (
    <div className="content">
      <Row className="mt-4 mx-5 pe-5 justify-content-center">
        <Col xs="9" className="">
          <Table hover>
            <thead>
              <tr>
                <th></th>
                <th>Active</th>
                <th className="nameHeader">Name</th>
                <th>Company</th>
                <th>Day</th>
                <th>from</th>
                <th>to</th>
                <th>Game</th>
                <th>Players</th>
                <th>Private</th>
                <th>Booked on</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data ? (
                <>
                  {data.map((item: any, index: any) => {

                    return (
                      <>
                        <tr key={index}>
                          <td>
                            <button
                              onClick={() => hide(item.id)}
                              className="open"
                            >
                              +
                            </button>
                          </td>
                          <td>
                            <FormCheck
                              className="mt-3 switch"
                              type="switch"
                            ></FormCheck>
                          </td>
                          <td className="nameClient">{item.name}</td>
                          {item.company ? (
                            <>
                              <td className='icon'><AiOutlineCheckCircle></AiOutlineCheckCircle></td>
                            </>
                          ) : (
                            <></>
                          )}

                          <td>{formatDate(item.date)}</td>
                          <td>13:30</td>
                          <td>14:30</td>
                          <td>Hallow</td>
                          <td className="">
                            <button className="players">{item.players}</button>
                          </td>
                          {item.private === 1 ? (
                            <>
                              <td className='icon'><AiOutlineCheckCircle></AiOutlineCheckCircle></td>
                            </>
                          ) : (
                            <>
                              <td></td>
                            </>
                          )}

                          <td>03/02/07</td>
                          <td>euro</td>
                        </tr>
                        <tr id={"extraTR" + item.id}>
                          <td colSpan={12} className="extra">
                            <div id={"" + item.id} className="details">
                              <Row>
                                <Col xs={5}>
                                  <h6>Booking</h6>
                                  <Row className="detailRow">
                                    <Col className="text-end">
                                      <label>Booked on:</label>
                                    </Col>
                                    <Col>
                                      <p>{formatDate(item.updated_at)}</p>
                                    </Col>
                                  </Row>
                                  <Row className="detailRow">
                                    <Col className="text-end">
                                      {" "}
                                      <label htmlFor="">Private:</label>
                                    </Col>
                                    <Col>
                                      {item.private === 1 ? (
                                        <>
                                          <p>YES</p>
                                        </>
                                      ) : (
                                        <>
                                          <p>NO</p>
                                        </>
                                      )}
                                    </Col>
                                  </Row>
                                  <Row className="detailRow">
                                    <Col className="text-end">
                                      <label htmlFor="">Players:</label>
                                    </Col>
                                    <Col>
                                      <p>{item.players}</p>
                                    </Col>
                                  </Row>
                                  <Row className="detailRow">
                                    <Col className="text-end">
                                      <label htmlFor="">Room:</label>
                                    </Col>
                                    <Col>
                                      <p>Room {item.room}</p>
                                    </Col>
                                  </Row>
                                  <Row className="detailRow">
                                    <Col className="text-end">
                                      <label htmlFor="">Starts at:</label>
                                    </Col>
                                    <Col>
                                      <p>{item.date}</p>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col xs={5} className="mb-5">
                                  <h6>Payment</h6>
                                  <Row className="detailRow">
                                    <Col className="text-end">
                                      <label htmlFor="">Price e. VAT:</label>
                                    </Col>
                                    <Col>
                                      <p>
                                        €{(item.players * 34.99).toFixed(2)}
                                      </p>
                                    </Col>
                                  </Row>
                                  <Row className="detailRow">
                                    <Col className="text-end">
                                      <label htmlFor="">VAT:</label>
                                    </Col>
                                    <Col>
                                      <p>€0.00</p>
                                    </Col>
                                  </Row>
                                  <Row className="detailRow">
                                    <Col className="text-end">
                                      <label htmlFor="">Price i. VAT:</label>
                                    </Col>
                                    <Col>
                                      <p>€0.00</p>
                                    </Col>
                                  </Row>
                                  <Row className="detailRow">
                                    <Col className="text-end">
                                      <label htmlFor="">Reduction:</label>
                                    </Col>
                                    <Col>
                                      <p>€0.00</p>
                                    </Col>
                                  </Row>
                                  <Row className="detailRow">
                                    <Col className="text-end">
                                      <label htmlFor="">Coupon code:</label>
                                    </Col>
                                    <Col>
                                      <p>/</p>
                                    </Col>
                                  </Row>
                                  <Row className="detailRow">
                                    <Col className="text-end">
                                      <label htmlFor="">Total:</label>
                                    </Col>
                                    <Col>
                                      <p>
                                        €{(item.players * 34.99).toFixed(2)}
                                      </p>
                                    </Col>
                                  </Row>
                                  <Row className="detailRow">
                                    <Col className="text-end">
                                      <label htmlFor="">
                                        Outstanding amount:
                                      </label>
                                    </Col>
                                    <Col>
                                      <p>€0.00</p>
                                    </Col>
                                  </Row>
                                  <Row className="detailRow">
                                    <Col className="text-end">
                                      <label htmlFor="">Payment method:</label>
                                    </Col>
                                    <Col>
                                      <p>Bancontact/Mister Cash</p>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col xs={2}>
                                  <Row>
                                    <Col>
                                      <button
                                        className="deleteBttn"
                                        onClick={() => props.delete(item.id)}
                                      >
                                        delete
                                      </button>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col>
                                      <button
                                        className="editBttn"
                                        onClick={() =>
                                          showUpdateModal(item.id, item.name)
                                        }
                                      >
                                        edit
                                      </button>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                              <Row>
                                <Col xs={5}>
                                  <h6>Company</h6>
                                  <Row className="detailRow">
                                    <Col className="text-end">
                                      <label>Company:</label>
                                    </Col>
                                    <Col>
                                      <p>{item.company}</p>
                                    </Col>
                                  </Row>
                                  <Row className="detailRow">
                                    <Col className="text-end">
                                      <label htmlFor="">Address:</label>
                                    </Col>
                                    <Col>
                                      <p>Doornstraat 94</p>
                                    </Col>
                                  </Row>
                                  <Row className="detailRow">
                                    <Col className="text-end">
                                      <label htmlFor="">City:</label>
                                    </Col>
                                    <Col>
                                      <p>9940 Evergem</p>
                                    </Col>
                                  </Row>
                                  <Row className="detailRow">
                                    <Col className="text-end">
                                      <label htmlFor="">VAT number:</label>
                                    </Col>
                                    <Col>
                                      <p>BE 0431934763</p>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col xs={5}>
                                  <h6>Person</h6>
                                  <Row className="detailRow">
                                    <Col className="text-end">
                                      <label>Name:</label>
                                    </Col>
                                    <Col>
                                      <p>{item.name}</p>
                                    </Col>
                                  </Row>
                                  <Row className="detailRow">
                                    <Col className="text-end">
                                      <label htmlFor="">Email:</label>
                                    </Col>
                                    <Col>
                                      <p>{item.email}</p>
                                    </Col>
                                  </Row>
                                  <Row className="detailRow">
                                    <Col className="text-end">
                                      <label htmlFor="">Phone:</label>
                                    </Col>
                                    <Col>
                                      <p>092530329</p>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </>
              ) : (
                <></>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Modal show={showUpdate} onHide={() => setShowUpdate(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Row xs={1}>
              <Col>You're about to edit booking by {updateName}</Col>
            </Row>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => update()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Content;

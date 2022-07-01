import { FC } from "react";
import { Row, Col } from "react-bootstrap";

const Header: FC = () => {
  return (
    <div className="header">
      <Row className="mt-2 mb-2 me-1 justify-content-center">
        <Col sm="1" className="tab active text-center ms-5">
          <div>
            Bookings
          </div>
        </Col>
        <Col sm="2" className="tab text-center">
          <div>
            Game sessions
          </div>
        </Col>
        <Col sm="3"></Col>
        <Col sm="2" className="text-end ms-5">
          <select className="box" name="venue" id="venue">
            <option value="Ghent">Ghent</option>
          </select>
        </Col>
        <Col sm="1" className="content-end">
          <div className="rounded-circle profile"></div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;

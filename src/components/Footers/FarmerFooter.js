// reactstrap components
import { Row, Col, Nav, NavItem } from "reactstrap";

const FarmerFooter = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-xl-between">
        <Col xl="6">
          <div className="copyright text-center text-xl-left text-muted">
            © 77GSI {new Date().getFullYear()}{" "}
            <a className="font-weight-bold ml-1">
              {" "}
              Grow-it-Green farming assistant
            </a>
          </div>
        </Col>

        <Col xl="6">
          <Nav className="nav-footer justify-content-center justify-content-xl-end">
            <NavItem> Grow-it-Green farming assistant</NavItem>
          </Nav>
        </Col>
      </Row>
    </footer>
  );
};

export default FarmerFooter;

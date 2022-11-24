import { useState } from "react";
// reactstrap components
import { Container, Button, Card, CardTitle, CardText } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Reports = () => {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState();
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="d-flex justify-content-center mt-5">
        <div>
          <Card
            body
            className="my-2"
            style={{
              width: "18rem",
            }}
          >
            <CardTitle tag="h2">NO REPORTS AVAILABLE</CardTitle>
            <CardText>click the link below for info</CardText>
            <Button color="info">Go somewhere</Button>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default Reports;

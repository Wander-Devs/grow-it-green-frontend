import { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import { Container, Button, Card, CardTitle, CardText } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Reports = () => {
  const [copiedText, setCopiedText] = useState();
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="d-flex justify-content-center mt-5">
        {/* Table */}
        <div>
          <Card
            body
            className="my-2"
            style={{
              width: "18rem",
            }}
          >
            <CardTitle tag="h2">NO REPORTS AVAILABLE</CardTitle>
            <CardText>clivk the link below for for info</CardText>
            <Button color="info">Go somewhere</Button>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default Reports;

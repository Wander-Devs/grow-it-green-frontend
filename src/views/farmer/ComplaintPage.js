import { useState } from "react";

// reactstrap components
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const ComplaintPage = () => {
  const [] = useState();
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="d-flex justify-content-center mt-5">
        {/* Table */}
        <Form>
          <FormGroup>
            COMPLAINT ID
            <Input
              id="text"
              name="tip number"
              placeholder="complaint id"
              type="text"
            />
          </FormGroup>{" "}
          <FormGroup>
            FARMER ID
            <Input
              id="text"
              name="farmer id"
              placeholder="farmer id"
              type="text"
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="text">COMPLAINT</Label>
            <Input id="Text" name="text" type="textarea" />
          </FormGroup>
          <Button className="mt-4" color="success">
            SUBMIT
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default ComplaintPage;

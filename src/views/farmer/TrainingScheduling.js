import { useState } from "react";
// react component that copies the given text inside your clipboard
// import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const TrainingScheduling = () => {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState();
  return (
    <>
      <Header />

      <Container className="d-flex justify-content-center mt-5" fluid>
        {/* Table */}
        <Form>
          <FormGroup>
            <Label for="exampleEmail">
              <h3>PICK DATE AND COURSES</h3>
            </Label>
          </FormGroup>
          <FormGroup>
            <Label for="id">ID NUMBER</Label>
            <Input id="id" name="text" placeholder="id#" type="text" />
          </FormGroup>
          <FormGroup>
            <Label for="name">COMPLETE NAME</Label>
            <Input
              id="name"
              name="name"
              placeholder="complete name"
              type="text"
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleDate">DATE</Label>
            <Input
              id="exampleDate"
              name="date"
              placeholder="date placeholder"
              type="date"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleTime">Time</Label>
            <Input
              id="exampleTime"
              name="time"
              placeholder="time placeholder"
              type="time"
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelect">SELECT COURSES</Label>
            <Input id="exampleSelect" name="select" type="select">
              <option>Basic Computer Operation</option>
              <option>Troubleshooting</option>
              <option>Editing Platform Online</option>
            </Input>
          </FormGroup>

          <FormGroup check>
            <Input type="checkbox" />
            <Label check>Check me out</Label>
          </FormGroup>
          <Button className="mt-4" color="success">
            SUBMIT
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default TrainingScheduling;

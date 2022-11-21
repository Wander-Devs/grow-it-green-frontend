import { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Container,
  FormText,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const TrainingScheduling = () => {
  const [copiedText, setCopiedText] = useState();
  return (
    <>
      <Header />
      {/* Page content */}
      {/* <Container className="mt-4" fluid> */}
      {/* Table */}
      <Container className="d-flex justify-content-center mt-5">
        <Form>
          <FormGroup>
            <Label for="exampleSelect">CROP CATEGORY</Label>
            <Input id="exampleSelect" name="select" type="select">
              <option>Grains</option>
              <option>Vegetables</option>
              <option>Fruits</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">CROP NAME</Label>
            <Input id="exampleSelect" name="select" type="select">
              <option>rice</option>
              <option>Pechay</option>
              <option>Banana</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="name">QUANTITY</Label>
            <Input id="name" name="name" placeholder="kg" type="number" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input id="exampleFile" name="file" type="file" />
            <FormText>submit file/images</FormText>
          </FormGroup>
          <FormGroup tag="fieldset"></FormGroup>

          {/* <FormGroup check>
            <Input type="checkbox" />
            <Label check>Check me out</Label>
          </FormGroup> */}
          <Button className="mt-4" color="success">
            SUBMIT
          </Button>
        </Form>
      </Container>
      {/* </Container> */}
    </>
  );
};

export default TrainingScheduling;

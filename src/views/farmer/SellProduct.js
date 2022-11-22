import { useState } from "react";
// react component that copies the given text inside your clipboard

// reactstrap components
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const SellProduct = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="d-flex justify-content-center mt-5" fluid>
        <Form>
          <FormGroup>
            <Label for="id">ID NO.</Label>
            <Input id="text" name="id" placeholder="id number" type="number" />
          </FormGroup>
          <FormGroup>
            <Label for="name">SUPPLIER NAME</Label>
            <Input
              id="name"
              name="name"
              placeholder="supplier name"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="name">CROP NAME</Label>
            <Input id="name" name="name" placeholder="crop name" type="text" />
          </FormGroup>
          <FormGroup>
            <Label for="id">QUANTITY</Label>
            <Input id="text" name="id" placeholder="id number" type="number" />
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelect">Select Price</Label>
            <Input id="Select" name="select" type="select">
              <option>100</option>
              <option>200</option>
              <option>300</option>
              <option>400</option>
              <option>500</option>
              <option>600</option>
              <option>700</option>
              <option>800</option>
              <option>900</option>
              <option>100</option>
              <option>1100</option>
              <option>1200</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file} />
          </FormGroup>
          <FormGroup tag="fieldset"></FormGroup>

          <Button className="mt-4" color="success">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default SellProduct;

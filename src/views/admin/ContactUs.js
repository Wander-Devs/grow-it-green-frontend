import { useState } from "react";
// react component that copies the given text inside your clipboard
// reactstrap components
import {
  Table,
  Container,
  CardBody,
  CardText,
  CardImg,
  CardTitle,
  Card,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import Footer from "components/Footers/AdminFooter";

const ContactUs = () => {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <>
      <Header />
      {/* Page content */}
      <h1 align="center">CONTACT US</h1>

      <Container className="d-flex justify-content-center mt-5">
        {/* Table */}
        <>
          <Card className="my-2">
            <CardImg
              alt="Card image cap"
              src="https://www.spotmanufaktur.de/wp-content/uploads/2021/07/bio-naturkost-slider.jpg"
              style={{
                height: 300,
              }}
              top
              width="100%"
            />
            <CardBody>
              <CardTitle tag="h3">
                WELCOME TO GROW IT GREEN FARMING ASSITANT
              </CardTitle>
              <CardText>
                We work with a lot of farmer cooperatives and Associations for
                production of high value crops such as chilli and other
                non-traditional agricultural export crops all over the world.
                Our network of trained farmers produce quality vegetables that
                meet international market standards. This enables us to meet any
                order no matter how large.
              </CardText>
            </CardBody>
          </Card>
        </>
      </Container>
      <Container className="d-flex justify-content-center mt-5">
        <Form width="100px">
          <FormGroup>
            <FormGroup>
              <Label for="exampleName">FULL NAME</Label>
              <Input
                id="exampleName"
                name="name"
                placeholder="Full name"
                type="text"
              />
            </FormGroup>
            <Label for="exampleEmail">EMAIL ADDRESS</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="with a placeholder"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleNumber">PHONE NUMBER</Label>
            <Input
              id="exampleNumber"
              name="number"
              placeholder="Number"
              type="number"
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleText">MESSAGE US</Label>
            <Input
              id="exampleText"
              name="text"
              placeholder="Message Us..."
              type="textarea"
            />
          </FormGroup>
          <FormGroup>
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file} />
            <FormText>Choose file to upload</FormText>
          </FormGroup>

          <Button className="mt-4" color="success">
            SUBMIT
          </Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default ContactUs;

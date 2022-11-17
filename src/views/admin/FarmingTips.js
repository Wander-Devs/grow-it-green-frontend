import { useState } from "react";

// reactstrap components
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const FarmingTips = () => {
  const [copiedText, setCopiedText] = useState();
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt-4" fluid>
        {/* Table */}
        <Form>
          <FormGroup>
            TIP NUMBER
            <Input
              id="text"
              name="tip number"
              placeholder="tip number"
              type="number"
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
            <Label for="text">TIPS</Label>
            <Input id="Text" name="text" type="textarea" />
          </FormGroup>
          <Button
            className="mt-4"
            color="success"
            // onClick={() => {
            //   history.push("/admin/index");
            // }}
          >
            SUBMIT
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default FarmingTips;

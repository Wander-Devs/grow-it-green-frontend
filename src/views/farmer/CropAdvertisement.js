import { useState } from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
  Container,
  Table,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const CropAdvertisement = () => {
  const [copiedText, setCopiedText] = useState();
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt-4" fluid>
        {/* Table */}
        <Table>
          <thead>
            <tr>
              <th>POSTED ADVERTISEMENTS</th>
              <th>SUPPLIER ID</th>
              <th>SUPPLIER NAME</th>
              <th>STATUS OF THE SELL CROP</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">
                <div>
                  <Button color="primary">Click Ads</Button>
                </div>
                rice bananacute
              </th>

              <td>009</td>
              <td>marko</td>
              <td>
                <div>
                  <Button color="success" outline>
                    ACCEPTED
                  </Button>{" "}
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <div>
                  <Button color="primary">Click Ads</Button>
                </div>
                sitaw in the zoo
              </th>
              <td>123</td>
              <td>JC</td>
              <td>
                {" "}
                <Button color="danger" outline>
                  NOT ACCEPTED
                </Button>{" "}
              </td>
            </tr>
            <tr>
              <th scope="row">
                {" "}
                <div>
                  <Button color="primary">Click Ads</Button>
                </div>
                sweet potato
              </th>
              <td>109</td>
              <td>MADEL</td>
              <td>
                {" "}
                <Button color="danger" outline>
                  NOT ACCEPTED
                </Button>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default CropAdvertisement;

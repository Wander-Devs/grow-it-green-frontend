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

const PaymentReceipt = () => {
  const [copiedText, setCopiedText] = useState();
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt-4" fluid>
        {/* Table */}
        <Table dark>
          <thead>
            <tr>
              <th>ID#</th>
              <th>CROP NAME</th>
              <th>QUANTITY</th>
              <th>TRANSACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">01</th>
              <td>BANANA</td>
              <td>57 kgs</td>
              <td>
                <Button color="success">paid</Button>{" "}
              </td>
            </tr>
            <tr>
              <th scope="row">02</th>
              <td>COCOMELON</td>
              <td>100 pcs</td>
              <td>
                {" "}
                <Button color="success">paid</Button>{" "}
              </td>
            </tr>
            <tr>
              <th scope="row">03</th>
              <td>SILING MAANGHANG</td>
              <td>50 kgs</td>
              <td>
                {" "}
                <Button color="success">paid</Button>{" "}
              </td>
            </tr>
            <tr>
              <th scope="row">04</th>
              <td>DURIAN</td>
              <td>3 pcs</td>
              <td>
                {" "}
                <Button color="success">paid</Button>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default PaymentReceipt;

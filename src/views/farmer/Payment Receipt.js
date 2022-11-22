import { useState } from "react";
import { Container, Table, Button } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const PaymentReceipt = () => {
  const [] = useState();
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt-4" fluid>
        {/* Table */}
        <Table>
          <thead>
            <tr>
              <th>ID NO.</th>
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

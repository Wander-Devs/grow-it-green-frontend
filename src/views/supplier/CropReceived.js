import { useState } from "react";
// reactstrap components
import { Container, Table, Button } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const CropAdvertisement = () => {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState();
  return (
    <>
      <Header />
      {/* Page content */}

      {/* Table */}
      <Container className="d-flex justify-content-center mt-5">
        <Table>
          <thead>
            <tr>
              <th>ORDER ID</th>
              <th>CROP NAME</th>
              <th>QUANTITY</th>
              <th>STATUS</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">001</th>

              <td>rice</td>
              <td>10kg</td>
              <td>
                {" "}
                <Button color="success" outline>
                  ACCEPTED
                </Button>{" "}
              </td>
            </tr>
            <tr>
              <th scope="row">002</th>
              <td>Banana</td>
              <td>100kg</td>
              <td>
                {" "}
                <Button color="danger" outline>
                  NOT ACCEPTED
                </Button>{" "}
              </td>
            </tr>
            <tr>
              <th scope="row">003</th>
              <td>Pechay</td>
              <td>10kg</td>
              <td>
                {" "}
                <Button color="success" outline>
                  ACCEPTED
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

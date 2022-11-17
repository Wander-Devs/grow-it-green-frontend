import { useState } from "react";
// react component that copies the given text inside your clipboard
// reactstrap components
import { Table, Container, Button } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Complaint = () => {
  const [copiedText, setCopiedText] = useState();
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt-4" fluid>
        {/* Table */}
        <Table hover>
          <thead>
            <tr>
              <th>ID#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Complaint</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>
                <div>
                  <Button color="danger">View Complaint</Button>
                </div>
              </td>
              <td>
                <div>
                  <Button color="success">Update Complaint</Button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>
                <div>
                  <Button color="danger">View Complaint</Button>
                </div>
              </td>
              <td>
                <div>
                  <Button color="success">Update Complaint</Button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>
                <div>
                  <Button color="danger">View Complaint</Button>
                </div>
              </td>
              <td>
                <div>
                  <Button color="success">Update Complaint</Button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Complaint;

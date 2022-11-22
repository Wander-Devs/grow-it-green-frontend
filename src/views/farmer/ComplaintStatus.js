// reactstrap components
import { Card, CardHeader, Button, Table, Container, Row } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const ComplaintStatus = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt-4" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">COMPLAINT STATUS</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <Table size="sm">
                    <thead>
                      <tr>
                        <th>COMPLAINT ID</th>
                        <th>FARMER ID</th>
                        <th>COMPLAINTS</th>
                        <th>STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">001</th>
                        <td>0001</td>
                        <td>IM REALLY SORRY MS L.</td>
                        <td>
                          <Button color="warning" outline>
                            VIEWED
                          </Button>{" "}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">002</th>
                        <td>0002</td>
                        <td>I CANT DO THIS ANYMORE</td>
                        <td>
                          <Button color="warning" outline>
                            VIEWED
                          </Button>{" "}
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">003</th>
                        <td>0003</td>
                        <td>I NEED SOME LOVE</td>
                        <td>
                          <Button color="warning" outline>
                            VIEWED
                          </Button>{" "}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </thead>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ComplaintStatus;

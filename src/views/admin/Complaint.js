import { useState, useEffect } from "react";
import * as complaintService from "services/complaint";
// reactstrap components
import {
  Table,
  Container,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

const Complaint = () => {
  const [complaints, setComplaints] = useState([]);
  const getComplaints = () => {
    complaintService.getAllComplaints().then((res) => {
      if (res && res.data) {
        setComplaints(res.data.body);
      }
    });
  };

  useEffect(() => {
    getComplaints();
  }, []);
  console.log(complaints);
  const handleDelete = (id) => {
    complaintService.deleteComplaintById(id);
    setComplaints(complaints.filter((complaint) => complaint.id !== id));
  };

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="d-flex justify-content-center mt-5">
        <Table hover>
          <thead>
            <tr>
              <th>ID NO.</th>
              <th>User ID</th>
              <th>Complaint</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((complaint) => {
              return (
                <tr key={complaint.id}>
                  <td>{complaint.id}</td>
                  <td>{complaint.userId}</td>
                  <td>{complaint.message}</td>
                  <td>{complaint.status}</td>
                  <td>
                    {complaint.actions}
                    <div>
                      <Button
                        color="primary"
                        onClick={() => handleDelete(complaint.id)}
                      >
                        delete
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Complaint;

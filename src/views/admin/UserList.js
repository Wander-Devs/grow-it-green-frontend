import React from "react";
import Header from "components/Headers/Header.js";
import { useState, useEffect } from "react";
import { getAllUsers } from "services/users";
import { Table } from "reactstrap";
const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    getAllUsers().then((res) => {
      if (res && res.data) {
        setUsers(res.data);
      }
    });
  };

  const userNotAdmin = users.filter((user) => user.type !== "admin");
  console.log(userNotAdmin);
  return (
    <>
      <Header />
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>MobileNumber</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody users={userNotAdmin}>
          {users.map((userNotAdmin) => {
            return (
              <tr key={userNotAdmin.id}>
                <td>{userNotAdmin.firstName}</td>
                <td>{userNotAdmin.lastName}</td>
                <td>{userNotAdmin.mobileNo}</td>
                <td>{userNotAdmin.type}</td>
                <td>
                  {users.actions}
                  {/* <div>
                      <Button
                        color="primary"
                        onClick={() => handleDelete(complaint.id)}
                      >
                        delete
                      </Button>
                    </div> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default UserList;

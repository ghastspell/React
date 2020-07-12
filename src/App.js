import React from "react";
import "./App.css";
import { Table } from "react-bootstrap";
import Info from "./json/Datas";

function App() {
  return (
    <div className="App container">
      <Table striped>
        <thead>
          <th>firstname</th>
          <th>LastName</th>
          <th>Address</th>
          <th>PhoneNumber</th>
          <th>School</th>
        </thead>
        <tbody>
          {Info.map((data) => {
            return (
              <tr>
                <td>{data.fname}</td>
                <td>{data.lname}</td>
                <td>{data.address}</td>
                <td>{data.phonenumber}</td>
                <td>{data.school}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;

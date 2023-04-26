import StartFirebase from "../firebaseConfig/index";
import React from "react";
import { ref, onValue } from "firebase/database";
import { Table } from "react-bootstrap";

const db = StartFirebase();


export class RealtimeData extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: []
    };
  }

  componentDidMount() {
    const dbRef = ref(db, "test");

    onValue(dbRef, (snapshot) => {
      let records = [];

      let data = snapshot.val();
      
      records.push({ data: data });

      this.setState({ tableData: records });
    });
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>

            <th>Current</th>

          </tr>
        </thead>

        <tbody>
          {this.state.tableData.map((row, index) => {
            return (
              <tr>
                <td>Temperature:</td>

                <td>{row.data.temperature} °C</td>
                
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

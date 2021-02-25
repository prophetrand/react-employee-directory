import React from "react";
import TableRow from "../TableRow"
import "./style.css"

function Table(props) {
    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Picture</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                </tr>
            </thead>
            <tbody>
                {props.work.map((emps) => (
                    <TableRow
                        key={emps.id}
                        name={emps.name}
                        email={emps.email}
                        phone={emps.phone}
                        picture={emps.picture}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default Table;
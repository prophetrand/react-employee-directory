import React from "react";
import TableRow from "../TableRow"
import "./style.css"

function Table(props) {

    // Using a unique variable to employ a pure function rather than directly filtering the work array.
    let searched = props.work;
    searched = searched.filter(emp => {
        return emp.name.toLowerCase().includes(props.filter.toLowerCase());
    });


    return (
        <table className="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Picture</th>
                    <th scope="col" data-toggle={props.sort} onClick={props.sortTime}>Name {props.symbol}</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                </tr>
            </thead>
            <tbody>
                {searched.map((emps) => (
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
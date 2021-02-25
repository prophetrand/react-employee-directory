import React from "react";

function TableRow(props) {
    return (
        <tr>
            <td><img src={props.picture} alt={props.name} /></td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
        </tr>
    )
}

export default TableRow;
import React from "react";

function TableRow(props) {
    const emailLink = `mailto: ${props.email}`;
    
    return (
        <tr>
            <td><img src={props.picture} alt={props.name} /></td>
            <td>{props.name}</td>
            <td><a href = {emailLink}>{props.email}</a></td>
            <td>{props.phone}</td>
        </tr>
    )
}

export default TableRow;
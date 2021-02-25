import React from "react";
import "./style.css"

function Table(props) {
    return (
        <div>Table Here
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Picture</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={props.picture} alt={props.name} /></td>
                        <td>{props.name}</td>
                        <td>{props.email}</td>
                        <td>{props.phone}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default Table;
import React from "react";
import "./style.css"

function Header(props) {

    return (
        <div>
            <nav className="navbar">
                <div className="container-fluid">
                    <p className="navbar-brand">Reactive Directory</p>
                </div>
            </nav>
            <header>
                <h1>TheBigCompany Employee Directory</h1>
                <h3 style={{fontStyle: "italic"}}>Search for employees by name</h3>
                <div className="input-group justify-content-center">
                    <div className="form-outline">
                        <input onChange={props.filterTime} type="search" id="form1" className="form-control" placeholder="Search PLEASE"/>
                    </div>
                    <button type="button" className="btn btn-primary">
                        Go
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Header;
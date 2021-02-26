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
                <h1>TheBigCompany{'\u00a9'}{'\u2122'}{'\u00ae'} Employee Directory LLC</h1>
                <h3 style={{ fontStyle: "italic" }}>Search for employees by name</h3>
                <div className="input-group justify-content-center">
                    <div className="form-outline">
                        <input onChange={props.filterTime} type="search" id="form1" className="form-control" placeholder="Search if you please" />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;
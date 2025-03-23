import "./nav.css";
import React from "react";

const Nabvbar = () => {
    return(
        <div className="navbar">
            <div className="navcon">
                <span className="logo">AB Booking</span>
                <div className="navitem">
                    <button className="navbutt">Register</button>
                    <button className="navbutt">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Nabvbar;
import "./Mail.css";
import React from "react";

const Mail = () => {
    return(
        <div className="mail">
            <h1 className="mailtitle">Save Time,save money!</h1>
                <span className="maildesc">Sign up and we'll send best deals to you</span>
                <div className="mailcon">
                    <input type="text" placeholder="Your Email"/>
                    <button>Subscribe</button>
                </div>
        </div>
    )
}

export default Mail;
import React from "react";

import Property from "../Component/Property";
import Feature from "../Component/Feature";
import Fprop from "../Component/Fproperty";
import Header from "../Component/Header";
import Navbar from "../Component/Navbar";
import Mail from "../Component/Mail";
import "./Hom.css";
const Home = () => {
    return(
        <>
       <Navbar/>
       <Header/>
     <div className="homecon">
     <Feature/>
     <h1 className="hometitle">Stay In</h1>
     <Property/>
     <h1 className="hometitle">Home Guest love</h1>
     <Fprop/>
     <Mail/>
     </div>
     </>
    )
}

export default Home;
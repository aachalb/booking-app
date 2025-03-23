import React, { useState } from "react";
import "./Hotel.css";
import Nabvbar from "../Component/Navbar";
import Header from "../Component/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Mail from "../Component/Mail";
import { Navigate, useNavigate } from "react-router-dom";

const Hotels = () => {

const [slider,setSlider]=useState(0);
const[open,setopen]=useState(false);
const photos = [
    { src:"https://rhotelgeelong.com.au/wp-content/uploads/2021/03/R-Hotel-Geelong-Hotel-Room-11.jpg"},
    { src:"https://www.businesseventsgeelong.com.au/app/uploads/2021/09/rhotel3-scaled.jpeg"},
    { src: "https://rhotelgeelong.com.au/wp-content/uploads/2021/03/R-Hotel-Geelong-1-Bedroom-2-500x400.jpg"},
];
const handle=(i)=>{
    setSlider(i);
    setopen(true);
};

    return(
        <div>
            <Nabvbar/>
            <Header type="list" />
            <div className="hocon">
            {open && <div className="slider">
                <FontAwesomeIcon icon={faCircleXmark}/>
                <FontAwesomeIcon icon={faCircleArrowLeft}/>
                <div className="slidwra">
                    <img src={photos[slider].src} className="sliderimg"/>
                </div>
                <FontAwesomeIcon icon={faCircleArrowRight}/>
            </div>}
                <div className="howrap">
                 
                    <h1 className="hotitle">Grand Hotel</h1>
                    <div className="hoadd">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span className="dist">Excellent location - 800m from center</span>
                    </div>
                  
                    <div className="img">
                        {photos.map((photo,i)=>(
                            <div className="imgwrap">
                                <img src={photo.src} onClick={()=>handle(i)} className="hoimg"/>
                            </div>
                        ))}
                    </div>
                    <div className="detail">
                        <div className="texts">
                        <h1 className="detitle">Stay in the heart of earth   </h1>
                        <p className="desc">
                        The car parking and the Wi-Fi are always free, so you can stay in touch and come and go as you please. Strategically situated in city center, allowing you access and proximity to local attractions and sights. Don't leave before paying a visit to the famous Cafe 1986. Rated with 5 stars, this high-quality property provides guests with access to restaurant.
                        </p>
                        </div>
                    <div className="price">
                        <h1>Perfect for 5-night stay!</h1>
                        <h2>₹7,990(per night)</h2>
                        <button className="but">Reserve or book Now!</button>
                    </div>
                </div>
                </div>
                </div>
                <Mail/>
        </div>
    );
}

export default Hotels;
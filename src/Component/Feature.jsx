import React from "react";
import "./feac.css";
const Feature = () => {
    return(
        <>
       <div className="feature">
        <div className="featureitem">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Manali_City.jpg" className="featureImg" />
            <div className="featuretitle">
                <h1>Manali</h1>
                <h2>100+ Hotels</h2>
            </div>
        </div>
        <div className="featureitem">
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=600&h=500&s=1" className="featureImg" />
            <div className="featuretitle">
                <h1>Goa</h1>
                <h2>150+ Hotels</h2>
            </div>
        </div>
        <div className="featureitem">
            <img src="https://www.sotc.in/blog/wp-content/uploads/2022/04/Image2.jpg" className="featureImg" />
            <div className="featuretitle">
                <h1>Kashmir</h1>
                <h2>220+ Hotels</h2>
            </div>
        </div>
        <div className="featureitem">
            <img src="https://www.insightvacations.com/wp-content/uploads/2023/02/hawa-mahal-jaipur3.jpg" className="featureImg" />
            <div className="featuretitle">
                <h1>Jaipur</h1>
                <h2>140+ Hotels</h2>
            </div>
        </div>
       </div>
        </>
    )
}

export default Feature;
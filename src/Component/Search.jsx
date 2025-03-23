import React from 'react';
import ReactDOM from 'react-dom/client';
import "./Search.css";
import { useNavigate } from "react-router-dom";
const Search=()=>{
    const navigate=useNavigate();
    const handleid=()=>{
    navigate("/hotel/:id");
}
    return(
        <>
            <div className='seit'>
            <img src='https://3.imimg.com/data3/IL/XU/MY-8679324/5-star-hotel-room-booking-service-500x500.jpg'
            className='seimg' />
            <div className='sedec'>
                <h1 className="siTitle">Tower Street Apartments </h1>
                <span className="siDistance">500m from center </span> 
                <span className="siTaxiOp">Free airport taxi </span> 
                <span className="siSubtitle">Studio Apartment with Air conditioning </span> 
                <span className="siFeatures">Entire studio * 1 bathroom  * 21m² 1 full bed </span> 
                <span className="siCancelOp">Free cancellation </span> 
                <span className="siCancelOpSubtitle"> You can cancel later , so lock in this great price today!</span>
            </div>
            <div className='sedetail'>
                <div className='rate'>
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className='dettext'>
                    <span className='siPrice'>10,000</span>
                    <span className='siTax'>Includes taxes and fees</span>
                    <button className='siCheck' onClick={handleid}>See Availability</button>
                </div>
            </div>
            </div>
        </>
    )
}

export default Search;
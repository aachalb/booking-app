import "./Header.css";
import React from "react";
import {faBed, faCalendar, faPerson} from "@fortawesome/free-solid-svg-icons";
import {faPlane} from "@fortawesome/free-solid-svg-icons";
import {faCab} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from  "@fortawesome/react-fontawesome";
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns';
import { useNavigate } from "react-router-dom";


const Header = ({type}) => {
    const [destination,setdest] = useState("");
    const [open,setOpen] = useState(false);
    const [date,setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',
        }
    ]);
    const [openoptaion,setOpenoption] = useState(false)
    const navigate= useNavigate()
    const [options,setOption] = useState(
        {
            adult: 2,
            children: 0,
            room: 1,
        }
    );
    const handleOption=(name,opration) => {
        setOption((prev) => {
            return {
                ...prev,
                [name]:opration==="i" ?options[name] +1 :options[name] -1,
            };
        });
    };

    const handlesea=()=>{
        navigate("/hotel", { state: {destination,date,options}});
    }
    return(
        <div className="header">
        <div className="headercon">
            <div className="headerlist">
                <div className="headerlistitem active">
                <FontAwesomeIcon icon={faBed} />    
                <span>Stays</span>
                </div>
                <div className="headerlistitem">
                <FontAwesomeIcon icon={faPlane} />    
                <span>Flights</span>
                </div>
                <div className="headerlistitem">
                <FontAwesomeIcon icon={faCab} />    
                <span>Texi</span>
                </div>
            </div>
            { type !== "list" &&
            <>
            <h1 className="headertitle">A lifetime discounts?It's Genius.</h1>
            <p className="headerdes">Get rewarded for your travel - unlock instant saving of 10% or one free stay</p>
            <button className="headerbnt">Sign in/Register</button>
            <div className="headersearch">
                <div className="headersearchitem">
                    <FontAwesomeIcon icon={faBed} className="headericon"/>
                    <input type="text" placeholder="Where you are going?" className="headerinput"
                    onChange={e=>setdest(e.target.value)} />    
                </div>
                <div className="headersearchitem">
                    <FontAwesomeIcon icon={faCalendar} className="headericon"/>
                    <span onClick= { ()=>setOpen(!open)}className="headersearchtext">{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
                    {open && <DateRange 
                    editableDateInputs={true}
                    onChange={item =>setDate([item.selection])}
                    moveRangeOnFirstSelection={false}            
                    ranges={date}
                    className="date"
      />}
    
                </div>
                <div className="headersearchitem">
                    <FontAwesomeIcon icon={faPerson} className="headericon"/>
                    <span onClick={()=>setOpenoption(!openoptaion)}className="headersearchtext">{`${options.adult} adult . ${options.children} Children . ${options.room} Room`}</span> 
                        { openoptaion && <div className="options">
                            <div className="optionitem">
                                <span className="optiontext">Adult</span>
                                <div className="opco">
                                <button disabled={options.adult <=1} className="optionbnt" onClick={()=>handleOption("adult","d")}>-</button>
                                <span className="optionnumber">{options.adult}</span>
                                <button className="optionbnt" onClick={()=>handleOption("adult","i")}>+</button>
                                </div>
                            </div>
                            <div className="optionitem">
                                <span className="optiontext">Children</span>
                                <div className="opco">
                                <button disabled={options.children <=0} className="optionbnt" onClick={()=>handleOption("children","d")}>-</button>
                                <span className="optionnumber">{options.children}</span>
                                <button className="optionbnt" onClick={()=>handleOption("children","i")}>+</button>
                                </div>
                            </div>
                            <div className="optionitem">
                                <span className="optiontext">Room</span>
                                <div className="opco">
                                <button disabled={options.room <=1} className="optionbnt" onClick={()=>handleOption("room","d")}>-</button>
                                <span className="optionnumber">{options.room}</span>
                                <button className="optionbnt" onClick={()=>handleOption("room","i")}>+</button>
                                </div>
                            </div>
                        </div>
                        }
                </div>
                <div className="headersearchitem">
                    <button className="headerbnt" onClick={handlesea}>Search</button>
                </div>
            </div>
            </>}
            </div>
        </div>
    )
}

export default Header;
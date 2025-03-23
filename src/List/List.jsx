import React, { useState } from "react";
import Header from "../Component/Header";
import Navbar from "../Component/Navbar";
import {format} from 'date-fns';
import Search from "../Component/Search";
import "./List.css";
import { useLocation } from "react-router-dom";
const List = () => {

    const loca=useLocation();
    const [destination,setdest] = useState(loca.state.destination)
    const [date,setDate] = useState(loca.state.date)
    const [options,setOption] = useState(loca.state.options)
    return(
        <>
            
            <Navbar/>
            <Header type="list" />
            <div className="listcon">
                <div className="listwrap">
                <div className="listsea">
                <h1 className="title">Search</h1>    
               
                <div className="lsitem">
                    <label>Destination</label>
                    <input type="text" placeholder={destination}/>
                </div>
                <div className="lsitem">
                    <label>Checkin-Date</label>
                    <span> { `${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}
                    </span>
                </div>
                <div className="lsitem">
                    <label>Options</label>
                    <div className="listop">
                        <span className="optiontext">Min Price<small> per night</small></span>
                        <input type="number" className="inpop" />
                    </div>
                    <div className="listop">
                        <span className="optiontext">Max Price <small>per night</small></span>
                        <input type="number" className="inpop" />
                    </div><div className="listop">
                        <span className="optiontext">Adult</span>
                        <input type="number" min={1} className="inpop" placeholder={options.adult}/>
                    </div><div className="listop">
                        <span className="optiontext">Children</span>
                        <input type="number"  min={0} className="inpop" placeholder={options.children} />
                    </div><div className="listop">
                        <span className="optiontext">Rooms</span>
                        <input type="number" min={1} className="inpop" placeholder={options.room}  />
                    </div>
                </div>
                <button className="">Search</button>
                </div>
                
                <div className="listres">
                <Search/>
                <Search/>
                <Search/>
                <Search/>
                <Search/>
                </div>
                </div>
            </div>
        </>
    )
}

export default List;
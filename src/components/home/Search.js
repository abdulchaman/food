import React, { useState, useEffect } from 'react';
const sUrl = "http://3.17.216.66:4000/location";
const lUrl = "http://3.17.216.66:4000/restaurant?stateId="

const Search = () => {
    const [states, setStates] = useState();
    const [location, setLocation] = useState(null);
    useEffect(()=>{
        const getStateData=async()=>{
            try {
                let stateData = await fetch(sUrl);
                stateData = await stateData.json();
                setStates(stateData);
            } catch (error) {
                console.error("error",error)
            }
        }
        getStateData();
    },[])
    // console.log(states);
    const DisplayStateName=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item.state_id} key={item._id}>{item.state}</option>
                )
            })
        }
    }
    const handleState = async(event)=>{
        try {
            let state_id = event.target.value;
            let locationData = await fetch(`${lUrl}${state_id}`);
            locationData = await locationData.json();
            setLocation(locationData);
        } catch (error) {
            console.error("error",error);   
        }
    }
    // console.log(location);
    const DisplayLocation=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item.restaurant_id} key={item._id}>{item.restaurant_name}</option>
                )
            })
        }
    }
    return (
        <div>
            <center><h1>Find Delicious Food In Your City</h1></center>
            <div className='row'>
                <div className='col-lg-5'>
                    <select className="form-select" aria-label="Default select example" onChange={handleState}>
                        <option selected>Select State</option>
                        {DisplayStateName(states)}
                    </select>
                </div>
                <div className='col-lg-5'>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Select Location</option>
                        {DisplayLocation(location)}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Search
import React, { useState, useEffect } from 'react';
import DisplayRestList from './DisplayRestList';
const url = "http://3.17.216.66:4000/restaurant?mealtype_id=";
const Listing = (props) => {
    const [restList, setRestList] = useState();
    useEffect(() => {
        const getRestList = async () => {
            try {
                let mealId = props.match.params.mealId;
                let rList = await fetch(`${url}${mealId}`);
                rList = await rList.json();
                setRestList(rList);
                sessionStorage.setItem('mealId',mealId);
            } catch (error) {
                console.error("error",error);
            }
        }
        getRestList();
    },[])
    console.log(restList);
    return (
        <div className='row'>
            <div className='col-lg-3'>
                <h2>Filter</h2>
            </div>
            <div className='col-lg-9'>
                <DisplayRestList restList={restList}></DisplayRestList>
            </div>
        </div>
    )
}

export default Listing;
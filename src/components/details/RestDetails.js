import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
const url = "http://3.17.216.66:4000/details";
const RestDetails = (props) => {
    const [details, setDetails] = useState('');
    let mealId= sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):1;
    useEffect(() => {
        const getRestDetails = async () => {
            try {
                let restId = props.location.search.split("=")[1];
                let rDetails = await fetch(`${url}/${restId}`);
                rDetails = await rDetails.json();
                rDetails = rDetails[0]
                setDetails(rDetails);
            } catch (error) {
                console.error("error",error)
            }
        }
        getRestDetails();
    }, [])
    console.log(details);
    return (
        <div className='row' style={{marginTop:50}}>
            <div className='col-lg-12'>
                <img src={details.restaurant_thumb} style={{width:900,height:400}}></img>
            </div>
            <div className='col-lg-12'>
                <h2>{details.restaurant_name}</h2>
                <h3>Ratings: {details.rating_text}</h3>
                <h4>Rs. {details.cost}</h4>
                <h5>Address: {details.address}</h5>
                <h5>Phone: {details.contact_number}</h5>
            </div>
            <div className='col-lg-12'>
                {
                    details.image_gallery&&(
                        details.image_gallery.map((item,index)=>{
                            return(
                                <img src={item} key={index} style={{width:200,height:200,marginRight:20}}></img>
                            )
                        })
                    )
                }
            </div>
            <Link className="btn btn-danger" to={`/listing/${mealId}`}>Back</Link>
        </div>
    )
}
export default RestDetails;
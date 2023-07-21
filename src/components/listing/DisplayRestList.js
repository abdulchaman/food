import React from 'react';
import { Link } from 'react-router-dom';

const DisplayRestList = (props) => {
    const handleRestList=({restList})=>{
        if(restList){
            return restList.map((item)=>{
                return (
                    <Link to={`/details/?restId=${item.restaurant_id}`} className='row' key={item._id} style={{marginTop:30}}>
                        <div className='col-lg-5'>
                            <img src={item.restaurant_thumb} style={{width:300,height:300}}></img>
                        </div>
                        <div className='col-lg-7'>
                            <h3>{item.restaurant_name}</h3>
                            <h4>{item.address}</h4>
                            <h4>Rs. {item.cost}</h4>
                            <h4>{item.rating_text}</h4>
                            {
                                item.mealTypes.map((type)=>{
                                    return (
                                        <div key={type.mealtype_id} style={{display:"inline"}}>
                                            <button className='btn btn-primary'>{type.mealtype_name}</button>&nbsp;
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Link>
                )
            })
        }
        else{
            return(
                <h3>Loading...</h3>
            )
        }
    }
  return (
    <div>
        {handleRestList(props)}
    </div>
  )
}

export default DisplayRestList;